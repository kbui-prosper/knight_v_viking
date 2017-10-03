import { Bodies } from 'matter-js';

window.knight.keyMap = {
  left: 81, //'q',
  right: 87, //'w'
  attack: 88, //'x'
  jump: 67, //'c'
};

window.viking.keyMap = {
  left: 188, //','
  right: 190, //'.'
  attack: 219, //'['
  jump: 221, //']'
};

class BaseCharacter {
  constructor (charType) {
    this.charType = charType;
    this.body = Bodies.rectangle(
      Math.random() * 800 + 100, 300,
      50, 90,
      {
        inertia: 'Infinity',
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
    this.setKeyListeners();
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

  setKeyListeners () {
    window.addEventListener(
      "keydown",
      e => this.handleKeyDown(e)
    );
    window.addEventListener(
      "keyup",
      e => this.handleKeyUp(e)
    );
  }

  handleKeyDown (e) {
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        console.log('left');
        break;
      case right:
        console.log('right');
        break;
      case attack:
        console.log('attack');
        break;
      case jump:
        console.log('jump');
        break;
    }
  }

  handleKeyUp (e) {
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        console.log('left no more');
        break;
      case right:
        console.log('right no more');
        break;
      case attack:
        console.log('attack no more');
        break;
      case jump:
        console.log('jump no more');
        break;
    }
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
