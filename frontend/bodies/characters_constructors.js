import { Bodies } from 'matter-js';

class BaseCharacter {
  constructor (charType) {
    this.charType = charType;
    this.body = Bodies.rectangle(
      Math.random() * 800 + 100, 300,
      50, 90,
      {
        render: {
          lineWidth: 5,
          sprite: {
            texture: charType.idlePNGs[0],
            xScale: 0.1,
            yScale: 0.1,
            xOffset: -0.2,
            yOffset: -0.02
          }
        }
      }
    );

    this.startIdle();
  }

  startIdle () {
    this.idlePNGsIndex = 0;
    this.idleInterval = window.setInterval(() => this.nextIdle(), 400);
  }

  nextIdle () {
    this.idlePNGsIndex =
    (this.idlePNGsIndex + 1) % this.charType.idlePNGs.length;

    this.body.render.sprite.texture =
    this.charType.idlePNGs[this.idlePNGsIndex];
  }

  clearIdle () {
    window.clearInterval(this.idleInterval);
  }
}

export class Knight extends BaseCharacter {
  constructor () {
    super(window.knight);
  }
}

export class Viking extends BaseCharacter {
  constructor () {
    super(window.viking);
  }
}

// const baseCharacter = (charType) => () => {
//   const character = Bodies.rectangle(
//     Math.random() * 400 + 100, 300,
//     50, 90,
//     {
//       render: {
//         lineWidth: 5,
//         sprite: {
//           texture: charType.idlePNGs[0],
//           xScale: 0.1,
//           yScale: 0.1,
//           xOffset: -0.2,
//           yOffset: -0.02
//         }
//       }
//     }
//   );
//
//   return character;
// };
//
// export const knight = baseCharacter(window.knight);
// export const viking = baseCharacter(window.viking);
