const weapons = [
  // { display: '14式竹筒銃・甲', path: 'images/14式竹筒銃・甲.png' },
  // { display: 'ボールドマーカー', path: 'images/ボールドマーカー.png' },
  // { display: '4Kスコープ', path: 'images/4Kスコープ.png' },
  // { display: 'ロングブラスター', path: 'images/ロングブラスター.png' },
  // { display: 'H3リールガン', path: 'images/H3リールガン.png' },
  // { display: 'ヒーローシューター レプリカ', path: 'images/ヒーローシューター レプリカ.png' },
  // { display: 'H3リールガンD', path: 'images/H3リールガンD.png' },
  // { display: 'エクスプロッシャー', path: 'images/エクスプロッシャー.png' },
  // { display: 'L3リールガン', path: 'images/L3リールガン.png' },
  // { display: 'ジェットスイーパー', path: 'images/ジェットスイーパー.png' },
  // { display: 'L3リールガンD', path: 'images/L3リールガンD.png' },
  // { display: 'スプラチャージャー', path: 'images/スプラチャージャー.png' },
  // { display: 'LACT-450', path: 'images/LACT-450.png' },
  // { display: 'スプラマニューバー', path: 'images/スプラマニューバー.png' },
  // { display: 'N-ZAP85', path: 'images/N-ZAP85.png' },
  // { display: 'スペースシューター', path: 'images/スペースシューター.png' },
  // { display: 'N-ZAP89', path: 'images/N-ZAP89.png' },
  // { display: 'デュアルスイーパー', path: 'images/デュアルスイーパー.png' },
  // { display: 'R-PEN5H', path: 'images/R-PEN5H.png' },
  // { display: 'トライストリンガー', path: 'images/トライストリンガー.png' },
  // { display: 'Rブラスターエリート', path: 'images/Rブラスターエリート.png' },
  // { display: 'バレルスピナーデコ', path: 'images/バレルスピナーデコ.png' },
  // { display: 'Rブラスターエリートデコ', path: 'images/Rブラスターエリートデコ.png' },
  // { display: 'プライムシューター', path: 'images/プライムシューター.png' },
  // { display: 'S-BLAST92', path: 'images/S-BLAST92.png' },
  // { display: 'ラピッドブラスター', path: 'images/ラピッドブラスター.png' },
  // { display: 'パブロ', path: 'images/パブロ.png' },
  // { display: 'オーバーフロッシャー', path: 'images/オーバーフロッシャー.png' },
  // { display: 'ヒッセン', path: 'images/ヒッセン.png' },
  // { display: 'カーボンローラーデコ', path: 'images/カーボンローラーデコ.png' },
  // { display: 'ホクサイ', path: 'images/ホクサイ.png' },
  // { display: 'クラッシュブラスター', path: 'images/クラッシュブラスター.png' },
  // { display: 'リッター4K', path: 'images/リッター4K.png' },
  // { display: 'クーゲルシュライバー', path: 'images/クーゲルシュライバー.png' },
  // { display: 'ケルビン525', path: 'images/ケルビン525.png' },
  // { display: 'シャープマーカーネオ', path: 'images/シャープマーカーネオ.png' },
  // { display: 'モップリン', path: 'images/モップリン.png' },
  // { display: 'スパッタリー・ヒュー', path: 'images/スパッタリー・ヒュー.png' },
  // { display: 'ノーチラス47', path: 'images/ノーチラス47.png' },
  // { display: 'スプラスコープコラボ', path: 'images/スプラスコープコラボ.png' },
  // { display: 'イグザミナー', path: 'images/イグザミナー.png' },
  // { display: 'スプラスピナーコラボ', path: 'images/スプラスピナーコラボ.png' },
  // { display: 'ジムワイパー', path: 'images/ジムワイパー.png' },
  // { display: 'スプラローラーコラボ', path: 'images/スプラローラーコラボ.png' },
  // { display: 'スパッタリー', path: 'images/スパッタリー.png' },
  // { display: 'ドライブワイパーデコ', path: 'images/ドライブワイパーデコ.png' },
  // { display: 'ハイドラント', path: 'images/ハイドラント.png' },
  // { display: 'ノヴァブラスターネオ', path: 'images/ノヴァブラスターネオ.png' },
  // { display: 'フィンセント', path: 'images/フィンセント.png' },
  // { display: 'バケットスロッシャー', path: 'images/バケットスロッシャー.png' },
  // { display: 'プロモデラーMG', path: 'images/プロモデラーMG.png' },
  // { display: 'ボールドマーカーネオ', path: 'images/ボールドマーカーネオ.png' },
  // { display: 'プロモデラーRG', path: 'images/プロモデラーRG.png' },
  // { display: 'ワイドローラーコラボ', path: 'images/ワイドローラーコラボ.png' },
  // { display: 'スプラスコープ', path: 'images/スプラスコープ.png' },
  // { display: 'ヴァリアブルローラー', path: 'images/ヴァリアブルローラー.png' },
  // { display: 'スプラスピナー', path: 'images/スプラスピナー.png' },
  // { display: 'キャンピングシェルター', path: 'images/キャンピングシェルター.png' },
  // { display: 'スプラローラー', path: 'images/スプラローラー.png' },
  // { display: 'スクリュースロッシャー', path: 'images/スクリュースロッシャー.png' },
  // { display: 'ソイチューバー', path: 'images/ソイチューバー.png' },
  // { display: 'スプラシューターコラボ', path: 'images/スプラシューターコラボ.png' },
  // { display: 'バレルスピナー', path: 'images/バレルスピナー.png' },
  // { display: 'ソイチューバーカスタム', path: 'images/ソイチューバーカスタム.png' },
  // { display: 'パブロ・ヒュー', path: 'images/パブロ・ヒュー.png' },
  // { display: 'ダイナモローラーテスラ', path: 'images/ダイナモローラーテスラ.png' },
  // { display: 'パラシェルター', path: 'images/パラシェルター.png' },
  // { display: 'パラシェルターソレーラ', path: 'images/パラシェルターソレーラ.png' },
  // { display: 'ボトルガイザー', path: 'images/ボトルガイザー.png' },
  // { display: 'ラピッドブラスターデコ', path: 'images/ラピッドブラスターデコ.png' },
  // { display: 'ワイドローラー', path: 'images/ワイドローラー.png' },
  // { display: 'オーバーフロッシャーデコ', path: 'images/オーバーフロッシャーデコ.png' },
  // { display: 'もみじシューター', path: 'images/もみじシューター.png' },
  // { display: 'クアッドホッパーブラック', path: 'images/クアッドホッパーブラック.png' },
  // { display: 'わかばシューター', path: 'images/わかばシューター.png' },
  // { display: 'クアッドホッパーホワイト', path: 'images/クアッドホッパーホワイト.png' },
  // { display: 'カーボンローラー', path: 'images/カーボンローラー.png' },
  // { display: 'クラッシュブラスターネオ', path: 'images/クラッシュブラスターネオ.png' },
  // { display: 'シャープマーカー', path: 'images/シャープマーカー.png' },
  // { display: 'スプラチャージャーコラボ', path: 'images/スプラチャージャーコラボ.png' },
  // { display: 'スクイックリンα', path: 'images/スクイックリンα.png' },
  // { display: 'スペースシューターコラボ', path: 'images/スペースシューターコラボ.png' },
  // { display: 'スパイガジェット', path: 'images/スパイガジェット.png' },
  // { display: 'トライストリンガーコラボ', path: 'images/トライストリンガーコラボ.png' },
  // { display: 'スプラシューター', path: 'images/スプラシューター.png' },
  // { display: 'バケットスロッシャーデコ', path: 'images/バケットスロッシャーデコ.png' },
  // { display: 'ダイナモローラー', path: 'images/ダイナモローラー.png' },
  // { display: 'プライムシューターコラボ', path: 'images/プライムシューターコラボ.png' },
  // { display: 'ドライブワイパー', path: 'images/ドライブワイパー.png' },
  // { display: 'ジェットスイーパーカスタム', path: 'images/ジェットスイーパーカスタム.png' },
  // { display: 'ノヴァブラスター', path: 'images/ノヴァブラスター.png' },
  // { display: 'スクリュースロッシャーネオ', path: 'images/スクリュースロッシャーネオ.png' },
  // { display: 'ヒッセン・ヒュー', path: 'images/ヒッセン・ヒュー.png' },
  // { display: 'デュアルスイーパーカスタム', path: 'images/デュアルスイーパーカスタム.png' },
  // { display: 'ホクサイ・ヒュー', path: 'images/ホクサイ・ヒュー.png' },
  // { display: 'クーゲルシュライバー・ヒュー', path: 'images/クーゲルシュライバー・ヒュー.png' },
  // { display: 'ホットブラスター', path: 'images/ホットブラスター.png' },
  // { display: 'キャンピングシェルターソレーラ', path: 'images/キャンピングシェルターソレーラ.png' },
  { display: 'R-PEN5B', path: 'images/R-PEN5B.png' },
  { display: 'フィンセント・ヒュー', path: 'images/フィンセント・ヒュー.png' },
  { display: 'ジムワイパー・ヒュー', path: 'images/ジムワイパー・ヒュー.png' },
  { display: 'ホットブラスターカスタム', path: 'images/ホットブラスターカスタム.png' },
  { display: 'ボトルガイザーフォイル', path: 'images/ボトルガイザーフォイル.png' },
  { display: 'スパイガジェットソレーラ', path: 'images/スパイガジェットソレーラ.png' },
  { display: 'スプラマニューバーコラボ', path: 'images/スプラマニューバーコラボ.png' },
];

const insertWeaponDom = (parentElm, weapon) => {
  let wrapperElm = document.createElement('div');
  wrapperElm.className = 'result_wrapper';

  let weaponImgElm = document.createElement('img');
  weaponImgElm.src = weapon.path;
  weaponImgElm.alt = 'ランダム決定-スプラ3の武器';
  weaponImgElm.width = 100;
  weaponImgElm.height = 100;

  let weaponP_Elm = document.createElement('p');
  weaponP_Elm.textContent = weapon.display;
  weaponP_Elm.className = 'result_weapon_text';

  wrapperElm.appendChild(weaponImgElm);
  wrapperElm.appendChild(weaponP_Elm);
  parentElm.appendChild(wrapperElm);
};

const displayWeaponByRandom = () => {
  const resultElm = document.getElementById('result');
  const weaponIdx = Math.floor(Math.random() * weapons.length);
  while (resultElm.firstChild) {
    resultElm.removeChild(resultElm.firstChild);
  }

  insertWeaponDom(resultElm, weapons[weaponIdx]);
};
