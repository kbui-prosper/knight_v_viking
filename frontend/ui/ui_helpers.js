export const updateWeaponCount = (weapon, number) => {
  const weaponContainer = document.querySelector(`.${weapon}s`);
  const weapons = [];
  for (let i = 0; i < number; i++) {
    weapons.push(`<img src="${window[weapon]}" alt="${weapon}">`);
  }
  weaponContainer.innerHTML = weapons.join('') || 'No more weapons';
};

export const updateHealth = (charType, health) => {
  const healthBar = document.querySelector(`.${charType}-health-bar`);
  healthBar.style.width = `${health * 2}px`;
};
