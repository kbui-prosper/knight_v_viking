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

export const showVictoryAnnouncement = (winner) => {
  console.log('LMFAO');
  const victoryAnnouncement = document.querySelector('.victory-announcement');
  victoryAnnouncement.innerHTML = `The ${winner} has emerged victorious`;
  document.querySelector('.welcome-screen').style.visibility = 'visible';
  document.querySelector('.start-game').style.visibility = 'visible';
};

export const displayStartGameButton = () => {
  document.querySelector('.start-game').style.visibility = 'visible';
};
