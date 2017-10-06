import { Bodies, World } from 'matter-js';

import { Sword, Axe } from './weapons_constructors';
import { updateWeaponCount } from '../ui/ui_helpers';

window.knight.keyMap = {
  left: 65, //'q',
  right: 68, //'w'
  attack: 192, //'x'
  jump: 49, //'c'
};

window.viking.keyMap = {
  left: 37, //','
  right: 39, //'.'
  attack: 188, //'['
  jump: 190, //']'
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
    this.weaponString = this.Weapon === Sword ? 'sword' : 'axe';
    this.weaponCount = 3;
    this.health = 100;
    this.dead = false;

    this.body = Bodies.rectangle(
      charType === window.knight ? 300 : 900, 300,
      50, 90,
      {
        label: charType === window.knight ? 'knight' : 'viking',
        inertia: 'Infinity',
        chamfer: { radius: 15 },
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
    this.loadAnimationSprites();
    // this.setKeyListeners();
    updateWeaponCount(this.weaponString, this.weaponCount);
  }



  loadAnimationSprites () {
    let delay = 500;
    const deltaDelay = 75;
    this.charType.idlePNGs.left.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });
    this.charType.idlePNGs.right.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });
    this.charType.walkPNGs.left.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });
    this.charType.walkPNGs.right.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });
    this.charType.attackPNGs.left.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });
    this.charType.attackPNGs.right.forEach(sprite => {
      delay += deltaDelay;
      window.setTimeout(
        () => {
          this.body.render.sprite.texture = sprite;
        },
        delay
      );
    });

    delay += deltaDelay;
    window.setTimeout(
      () => {
        this.body.render.sprite.texture = this.charType.jumpPNGs.left[0];
      },
      delay
    );
    delay += deltaDelay;
    window.setTimeout(
      () => {
        this.body.render.sprite.texture = this.charType.jumpPNGs.right[0];
      },
      delay
    );
    console.log(delay);
  }

  startAnimation () {
    if (this.pngInterval) {
      this.stopAnimation();
    }
    this.pngIndex = this.pngIndex || 0;
    this.pngInterval = window.setInterval(() => this.nextPNG(), 100);
  }

  stopAnimation () {
    window.clearInterval(this.pngInterval);
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

    sprite.texture =
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
    if (e.repeat || this.dead) {
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
    if (this.dead) {
      return;
    }
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
    if (!this.weaponCount) {
      return;
    }
    this.stopAnimation();
    const { sprite } = this.body.render;
    const pngs = this.charType.attackPNGs[this.faceDirection];
    sprite.texture = pngs[0];
    sprite.yOffset = 0.6;
    window.setTimeout(() => this.startAnimation(), 300);

    window.setTimeout(() => {
      sprite.texture = pngs[1];
      this.weaponCount -= 1;
      updateWeaponCount(this.weaponString, this.weaponCount);

      const weapon = new this.Weapon(
        this.body.position,
        this.faceDirection,
        this.body.velocity,
        this.engine
      );

      World.add(
        this.engine.world,
        weapon.body
      );

      window.setTimeout(() => {
        this.weaponCount += 1;
        updateWeaponCount(this.weaponString, this.weaponCount);
      }, 5000);
    }, 100);
  }

  die () {
    this.dead = true;
    this.stopAnimation();
    this.body.render.sprite.texture =
    this.charType.diePNGs[this.faceDirection][0];
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
