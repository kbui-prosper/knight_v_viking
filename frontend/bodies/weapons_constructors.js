import { Bodies, Composite } from 'matter-js';

class BaseWeapon {
  constructor (spawnPos, direction, velocity, weaponType) {
    const { x, y } = spawnPos;

    console.log(velocity);

    this.body = Bodies.circle(
      x + (direction === 'right' ? 25 : -25), y - 45,
      25,
      {
        restitution: 0.7,
        torque: direction === 'right' ? 3 : -3,
        force: {
          x: velocity.x / 100 + (direction === 'right' ? 0.02 : -0.02),
          y: velocity.y / 100 -0.02
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
