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
