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

const wtf = 0.5;

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
        // restitution: 0.8,
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
        break;
      case jump:
        this.jump();
        break;
    }
  }

  goLeft () {
    this.stopRight();
    this.leftInterval = window.setInterval(
      () => {
        this.adjustFriction(0);
        this.body.force.x = -0.01;
      },
      50
    );

    if (this.faceDirection === 'right') {
      this.faceDirection = 'left';

      const { sprite } = this.body.render;

      sprite.texture =
      this.charType.idlePNGs[this.faceDirection][this.idlePNGsIndex];

      sprite.xOffset = 0.2 + wtf;
    }
  }

  goRight () {
    this.stopLeft();
    this.rightInterval = window.setInterval(
      () => {
        this.adjustFriction(0);
        this.body.force.x = 0.01;
      },
      50
    );

    if (this.faceDirection === 'left') {
      this.faceDirection = 'right';

      const { sprite } = this.body.render;

      sprite.texture =
      this.charType.idlePNGs[this.faceDirection][this.idlePNGsIndex];

      sprite.xOffset = -0.2 + wtf;
    }
  }

  stopLeft () {
    window.clearInterval(this.leftInterval);
    this.adjustFriction(0.5);
  }

  stopRight () {
    window.clearInterval(this.rightInterval);
    this.adjustFriction(0.5);
  }

  adjustFriction (newValue) {
    this.body.friction = newValue;
  }

  jump () {
    this.body.force = { x: 0, y: -0.2 };
  }

  handleKeyUp (e) {
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        this.stopLeft();
        break;
      case right:
        this.stopRight();
        break;
      case attack:
        break;
      case jump:
        break;
    }
  }
}

export class Knight extends BaseCharacter {
  constructor () {
    super(window.knight, 'right');

    window.k = this.body;
  }
}

export class Viking extends BaseCharacter {
  constructor () {
    super(window.viking, 'left');
  }
}
