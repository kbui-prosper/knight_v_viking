export const updateWeaponCount = (weapon, number) => {
  const weaponContainer = document.querySelector(`.${weapon}s`);
  const weapons = [];
  for (let i = 0; i < number; i++) {
    weapons.push(`<img src="${window.sword}" alt="sword">`);
  }
  weaponContainer.innerHTML = weapons.join('');
};
