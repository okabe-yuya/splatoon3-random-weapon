import { file } from "bun";
import fs from "fs";
import { parse, HTMLElement } from 'node-html-parser';

const target = [
  "シューター",
  "ローラー",
  "ワイパー",
  "フデ",
  "ブラスター",
  "スロッシャー",
  "マニューバー",
  "シェルター",
  "ストリンガー",
  "スピナー",
  "チャージャー",
]

/**
 * 取得したhtmlから解析対象のElementを抽出する。
 * parse, dont't validateの考え方に部分的に従っており、ここでは対象の抽出のみを行う。
 */
function parseHtmlExtractWeaponElements(dom: HTMLElement): HTMLElement[] {
  const entryContent = dom.querySelector(".entry-content");
  if (!entryContent) {
    throw new Error("対象のコンテンツが見つかりませんでした。");
  }

  // 現在地を表現するためのカーソル
  // 適宜、インクリメントして解析を進めていく
  let cursor = 0;
  const elements: HTMLElement[] = [];

  while (cursor < entryContent.children.length) {
    const children = entryContent.children[cursor];
    if (!children) {
      throw new Error("解析に失敗しました。");
    }

    // 解析対象のElementが登場するまでスキップする
    if (children.tagName === "H3") {
      const spanElement = children.children[0];
      if (spanElement?.tagName === "SPAN" && target.includes(spanElement?.textContent)) {
        // 対象が見つかったので、配列に記録する
        // 1つカーソルを進めて、次の要素からを解析対象とする
        cursor++;

        const divElement = entryContent.children[cursor];
        if (divElement) {
          const tbodyElement = divElement.querySelector("table tbody");
          if (tbodyElement) {
            elements.push(tbodyElement);
          }

          // 次の要素に進めて終了
          cursor++;
          continue;
        }

        throw new Error("解析に失敗しました。")
      }
    }

    cursor++;
  }
  return elements;
}


type WeaponMeta = {
  name: string,
  remoteImageUrl: string,
}

/**
 * Elementを解析して武器に関する情報（名前, 画像URL）を取得する。
 */
function getWeaponMeta(elements: HTMLElement[]): WeaponMeta[] {
  const result = elements.flatMap((element) => {
    const weaponMetas: WeaponMeta[] = [];

    for (const trElement of element.children) {
      // 先頭要素から必要な情報は全て取得できるため、それ以降は無視する
      const tdElement = trElement.querySelector("td")
      if (!tdElement) {
        throw new Error("対象の情報が見つかりませんでした。");
      }

      // 熟練度★4に関する情報だけ取得する
      if (tdElement.textContent.includes("★4")) {
        const imageElement = tdElement.querySelector("img");
        if (!imageElement) {
          throw new Error("対象の情報が見つかりませんでした。");
        }
        const imageUrl = imageElement.getAttribute("src");

        weaponMetas.push({
          name: tdElement.textContent.trim().replace("★4", ""),
          remoteImageUrl: imageUrl ?? ""
        });
      }
    }

    return weaponMetas;
  });

  return result;
}

type SavedResult = {
  weaponName: string;
  imageFileSavedPath: string;
};

async function imageDownloadWithParallel(weaponMetas: WeaponMeta[]): Promise<SavedResult[]> {
  // 保存先ディクレトリを作成
  if (!fs.existsSync("./images/")) {
    fs.mkdirSync("./images/");
  }

  const filenameFormatter = (filename: string): string => {
    // rule1.
    // R-PEN/5Hのように武器名に`/`が含まれるものがある
    // フォルダパスとバッティングしてしまうため、ファイル名としては仮の文字を割り当てておく

    // rule2.
    // なぜか先頭に`.`が含まれるケースがあるため、取り除く
    return `${filename}.png`
      .replace("/", "<replace>")
      .replace(/^\./, '')
  }

  // 後に.jsonファイルを自動生成したいため、作成したファイルに関する情報を返すようにする
  const result: SavedResult[] = [];
  await Promise.all(
    weaponMetas.map(async (weaponMeta) => {
      // ファイルをダウンロードしてバッファに変換する
      const response = await fetch(weaponMeta.remoteImageUrl);
      const buffer = Buffer.from(await response.arrayBuffer());

      const filename = filenameFormatter(weaponMeta.name);
      const savePath = `./images/${filename}`

      fs.writeFileSync(savePath, buffer);

      // 保存した情報を記録する
      result.push({
        weaponName: weaponMeta.name.replace(/^\./, ''),
        imageFileSavedPath: savePath,
      });
    })
  );

  return result;
}

/**
 * 武器情報に関するメタ情報を含む.jsを作成する。
 * jsの処理系でこの.jsを読み込みファイル解決を行う。
 */
function createWeaponJS(savedResult: SavedResult[]) {
  const jsonFormat = savedResult.map((result => {
    return {
      display: result.weaponName,
      path: result.imageFileSavedPath,
    }
  }));
  const jsContent = `const weapons = ${JSON.stringify(jsonFormat)};`;
  const buffer = Buffer.from(jsContent, "utf8");

  fs.writeFileSync('weapons.js', buffer);
}

(async () => {
  // HTMLを取得
  console.info("html情報の取得...")
  const response = await fetch('https://nonbirimaru.net/splatoon3_badge/');
  const html = await response.text();
  const dom = parse(html);


  // htmlを解析して、ダウンロード用のメタ情報を抽出する
  console.info("サイトを解析して、武器情報を取得...")
  const elements = parseHtmlExtractWeaponElements(dom);
  const weaponMeta = getWeaponMeta(elements)

  // ダウンロードを実行
  console.info("武器名と武器アイコンを取得...")
  const savedResult = await imageDownloadWithParallel(weaponMeta);

  // メタ情報を含む.jsを作成する
  console.info("メタ情報を含む.jsファイルを作成...")
  createWeaponJS(savedResult);

  console.log("✅ Done.")
})();

