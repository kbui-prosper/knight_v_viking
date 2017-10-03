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
  constructor (charType, faceDirection) {
    this.charType = charType;
    this.faceDirection = faceDirection;

    this.body = Bodies.rectangle(
      Math.random() * 800 + 100, 300,
      50, 90,
      {
        inertia: 'Infinity',
        friction: 0,
        restitution: 0.8,
        render: {
          lineWidth: 5,
          sprite: {
            texture: charType.idlePNGs[this.faceDirection][0],
            xScale: 0.1,
            yScale: 0.1,
            xOffset: faceDirection === 'right' ? -0.2 : 0.2,
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
    const { idlePNGs } = this.charType;

    this.idlePNGsIndex =
    (this.idlePNGsIndex + 1) % idlePNGs[this.faceDirection].length;

    this.body.render.sprite.texture =
    idlePNGs[this.faceDirection][this.idlePNGsIndex];
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
    if (e.repeat) {
      return;
    }
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        this.goLeft();
        break;
      case right:
        this.goRight();
        break;
      case attack:
        console.log('attack');
        break;
      case jump:
        this.jump();
        break;
    }
  }

  goLeft () {
    this.leftInterval = window.setInterval(
      // () => {
      //   const { x, y } = this.body.position;
      //   this.body.position = { x: x - 0.1, y };
      //   console.log('WENT LEFT 0.1');
      // },
      () => {
        this.body.force.x = -0.01;
      },
      50
    );

    if (this.faceDirection === 'right') {
      console.log('lel left');
      this.faceDirection = 'left';

      const { sprite } = this.body.render;

      sprite.texture =
      this.charType.idlePNGs[this.faceDirection][this.idlePNGsIndex];

      sprite.xOffset = 0.4;
    }
  }

  goRight () {
    this.rightInterval = window.setInterval(
      // () => {
      //   const { x, y } = this.body.position;
      //   this.body.position = { x: x + 0.1, y };
      //   console.log('WENT RIGHT 0.1');
      // },
      () => {
        this.body.force.x = 0.01;
      },
      50
    );

    if (this.faceDirection === 'left') {
      console.log('lel right');
      this.faceDirection = 'right';

      const { sprite } = this.body.render;

      sprite.texture =
      this.charType.idlePNGs[this.faceDirection][this.idlePNGsIndex];

      sprite.xOffset = -0.4;
    }
  }

  jump () {
    this.body.force = { x: 0, y: -0.2 };
  }

  handleKeyUp (e) {
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        window.clearInterval(this.leftInterval);
        break;
      case right:
        window.clearInterval(this.rightInterval);
        break;
      case attack:
        console.log('attack no more');
        break;
      case jump:
        // console.log('jump no more');
        break;
    }
  }
}

export class Knight extends BaseCharacter {
  constructor () {
    super(window.knight, 'right');
  }
}

export class Viking extends BaseCharacter {
  constructor () {
    super(window.viking, 'left');
  }
}
