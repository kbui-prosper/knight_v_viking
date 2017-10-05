import { Bodies } from 'matter-js';

class BaseWeapon {
  constructor (spawnPos, direction, velocity, width, height) {
    const { x, y } = spawnPos;
    this.body = Bodies.rectangle(
      x + (direction === 'right' ? 25 : -25), y - 45,
      40, 40,
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
    super(...args, 20, 45);
    this.body.render.sprite = {
      texture: window.sword,
      xScale: 0.1,
      yScale: 0.1,
      xOffset: 0.5,
      yOffset: 0.5
    };
  }
}

export class Axe extends BaseWeapon {
  constructor (...args) {
    super(...args, 30, 30);
  }
}
