import { Bodies } from 'matter-js';

class BaseWeapon {
  constructor (spawnPos, direction, velocity) {
    const { x, y } = spawnPos;
    this.body = Bodies.rectangle(
      x + (direction === 'right' ? 25 : -25), y - 45,
      20, 20,
      {
        restitution: 1,
        force: {
          x: velocity.x / 600 + (direction === 'right' ? 0.01 : -0.01),
          y: -0.01
        }
      }
    );
  }
}

export class Sword extends BaseWeapon {
  constructor (...args) {
    super(...args);
  }
}

export class Axe extends BaseWeapon {
  constructor (...args) {
    super(...args);
  }
}
