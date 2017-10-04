import { Bodies, World } from 'matter-js';

import { Sword, Axe } from './weapons_constructors';

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
  constructor (charType, faceDirection, engine) {
    this.charType = charType;
    this.faceDirection = faceDirection;
    this.onGround = false;
    this.moving = false;
    this.engine = engine;
    this.Weapon = charType === window.knight ? Sword : Axe;

    this.body = Bodies.rectangle(
      Math.random() * 800 + 100, 300,
      50, 90,
      {
        label: charType === window.knight ? 'knight' : 'viking',
        inertia: 'Infinity',
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

    this.body.charTypeClass = this;

    this.setDefaultFriction();
    this.startAnimation();
    this.setKeyListeners();
  }

  startAnimation () {
    this.pngIndex = 0;
    this.pngInterval = window.setInterval(() => this.nextPNG(), 100);
  }

  nextPNG () {
    let pngs;
    const { sprite } = this.body.render;
    if (!this.onGround) {
      pngs = this.charType.jumpPNGs;
      sprite.xOffset = this.faceDirection === 'left' ?
                       0.1 + wtf :
                       -0.1 + wtf;
      sprite.yOffset = -0.1 + wtf;
    } else {
      sprite.xOffset = this.faceDirection === 'left' ?
                       0.2 + wtf :
                       -0.2 + wtf;
      sprite.yOffset = -0.02 + wtf;

      if(this.moving) {
        pngs = this.charType.walkPNGs;
      } else {
        pngs = this.charType.idlePNGs;
      }
    }


    this.pngIndex =
    (this.pngIndex + 1) % pngs[this.faceDirection].length;

    this.body.render.sprite.texture =
    pngs[this.faceDirection][this.pngIndex];
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
        this.go('left');
        break;
      case right:
        this.go('right');
        break;
      case attack:
        this.attack();
        break;
      case jump:
        this.jump();
        break;
    }
  }

  handleKeyUp (e) {
    const { left, right, attack, jump } = this.charType.keyMap;
    switch (e.keyCode) {
      case left:
        if (this.faceDirection === 'left') {
          this.stop();
        }
        break;
      case right:
        if (this.faceDirection === 'right') {
          this.stop();
        }
        break;
      case attack:
        break;
      case jump:
        break;
    }
  }

  go (direction) {
    this.stop();

    this.moveInterval = window.setInterval(
      () => {
        this.moving = true;
        this.clearFriction();
        this.body.force.x = direction === 'left' ? -0.01 : 0.01;
      },
      50
    );

    if (this.faceDirection !== direction) {
      this.faceDirection = direction;
      this.nextPNG();
    }
  }

  stop () {
    window.clearInterval(this.moveInterval);
    this.moving = false;
    if (this.onGround) {
      this.setDefaultFriction();
    }
  }

  setDefaultFriction () {
    this.body.friction = 0.8;
  }

  clearFriction () {
    this.body.friction = 0;
  }

  jump () {
    if (this.onGround) {
      this.body.force = { x: 0, y: -0.2 };
    }
  }

  attack () {
    const sword = new this.Weapon(this.body.position);
    World.add(
      this.engine.world,
      sword.body
    );
  }
}

export class Knight extends BaseCharacter {
  constructor (engine) {
    super(window.knight, 'right', engine);
  }
}

export class Viking extends BaseCharacter {
  constructor (engine) {
    super(window.viking, 'left', engine);
  }
}
