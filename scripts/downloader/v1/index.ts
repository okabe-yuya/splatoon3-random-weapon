import { JSDOM } from 'jsdom';

// HTMLを取得
const response = await fetch('https://splatoonnews.com/badge/');
const html = await response.text();

// JSDOMでブラウザ環境を再現
const dom = new JSDOM(html);

/**
 * 取得したhtmlの木構造から武器に関する情報を持つElementのみを抽出する。
 * parse, don't validate の考えに部分的に従い解析結果となるElementの配列を返すようにしている。
 */
function parseHtmlExtractWeaponElements(dom: JSDOM): Element[] {
  const entryContent = dom.window.document.querySelector(".entry-content");
  if (!entryContent) {
    throw new Error("対象のコンテンツが見つかりませんでした。");
  }

  // 現在地を表現するためのカーソル
  // 適宜、インクリメントして解析を進めていく
  let cursor = 0;
  const weaponElements: Element[] = [];

  while (cursor < entryContent.children.length) {
    const children = entryContent.children[cursor];
    if (!children) {
      throw new Error("解析に失敗しました。")
    }

    // 解析対象のElementが登場するまで処理をスキップする
    if (children.tagName === "H2") {
      const spanElement = children.children[0];
      if (spanElement?.tagName === "SPAN" && spanElement?.textContent === "ブキ（武器）の熟練度バッジ一覧と入手方法") {
        // 対象が見つかったので、対象範囲までを配列に記録する
        // 1つカソールを進めて、次の要素からを解析対象とする
        cursor++;

        let isEnd = false;
        while (!isEnd) {
          const element = entryContent.children[cursor];
          if (!element) {
            throw new Error("解析に失敗しました。")
          }

          // h2が登場した場合、解析範囲が完了したとして終了する
          if (element.tagName === "H2") {
            return weaponElements;
          }

          // tableが登場した場合、解析対象として記録する
          if (element.tagName === "TABLE") {
            weaponElements.push(element);
          }

          cursor++;
        }
      }
    }

    cursor++;
  }

  // ここに到達しているということは対象を見つけられなかったため、例外とする
  throw new Error("解析対象が見つかりませんでした。");
}

const weaponElements = parseHtmlExtractWeaponElements(dom);

type WeaponMeta = { name: string; imageUrl: string };
const result = weaponElements.map((element) => {
  const weaponMetas: WeaponMeta[] = [];

  // すでにTableであることは確認済み
  const tbodyElement = element.children.item(0);
  if (tbodyElement) {
    for (const trElement of tbodyElement.children) {
      for (const tdElement of trElement.children) {
        // テーブルヘッダーが混じるため、tdであることを確認する
        // 例外にする必要はない（テーブルにthがあるのは当たり前）
        if (tdElement.tagName === "TD") {
          // 武器名に★5が含まれている項目はスキップする
          if (tdElement.textContent.includes("★5")) {
            break;
          }

          // 先頭要素から全ての情報が抽出できる
          const imgElement = tdElement.children.item(0);
          if (!imgElement) {
            throw new Error("画像の検索に失敗しました。");
          }
          weaponMetas.push({
            name: tdElement.textContent,
            imageUrl: imgElement.getAttribute("src") ?? "", // TODO: ここをResult型にする
          });

          break;
        }
      }
    }
  }

  return weaponMetas;
});

console.log(result)

