import { Bodies, Composite } from 'matter-js';
import { quickDecomp } from 'poly-decomp';

const swordVertices = [
  { x: 25, y: 10 }, { x: 50, y: 0 },
  { x: 40, y: 25 }, { x: 25, y: 40 },
  { x: 0, y: 50 }, { x: 10, y: 25 }
];

const axeVertices = [
  { x: 20, y: 0}, { x: 40, y: 0 },
  { x: 50, y: 10 }, { x: 50, y: 30},
  { x: 10, y: 50 }, { x: 0, y: 40},
];

class BaseWeapon {
  constructor (spawnPos, direction, velocity, weaponType) {
    const { x, y } = spawnPos;

    console.log(velocity);

    this.body = Bodies.fromVertices(
      x + (direction === 'right' ? 25 : -25), y - 45,
      weaponType === window.sword ? swordVertices : axeVertices,
      {
        restitution: weaponType === window.sword ? 0.3 : 1,
        torque: direction === 'right' ? 3 : -3,
        force: {
          x: velocity.x / 100 + (direction === 'right' ? 0.01 : -0.01),
          y: velocity.y / 100 -0.01
        }
      }
    );

    this.body.render.sprite = {
      texture: weaponType,
      xScale: 0.1,
      yScale: 0.1,
      xOffset: 0.5,
      yOffset: 0.5
    };

    // window.setTimeout(() => this.body.remove(), 5000);
  }
}

export class Sword extends BaseWeapon {
  constructor (...args) {
    super(...args, window.sword);
  }
}

export class Axe extends BaseWeapon {
  constructor (...args) {
    super(...args, window.axe);
  }
}
