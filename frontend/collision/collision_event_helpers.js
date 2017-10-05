import { updateHealth } from '../ui/ui_helpers';

export const onWallHandler = (bodyA, bodyB) => {
  if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
      bodyB.label === 'invisibleWall') {
    bodyA.friction = 0;
  }
  if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
      bodyA.label === 'invisibleWall') {
    bodyB.friction = 0;
  }
};

export const touchGroundHandler = (bodyA, bodyB) => {
  if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
      bodyB.label === 'invisibleGround') {
    bodyA.charTypeClass.onGround = true;
    if (!bodyA.charTypeClass.moving) {
      bodyA.charTypeClass.setDefaultFriction();
    }
  }
  if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
      bodyA.label === 'invisibleGround') {
    bodyB.charTypeClass.onGround = true;
    if (!bodyB.charTypeClass.moving) {
      bodyB.charTypeClass.setDefaultFriction();
    }
  }
};

export const leaveGroundHandler = (bodyA, bodyB) => {
  if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
      bodyB.label === 'invisibleGround') {
    bodyA.charTypeClass.onGround = false;
  }
  if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
      bodyA.label === 'invisibleGround') {
    bodyB.charTypeClass.onGround = false;
  }
};

export const weaponHitHander = (bodyA, bodyB) => {
  if ((bodyA.label === 'knight' && bodyB.label === 'axe') ||
      (bodyA.label === 'viking' && bodyB.label === 'sword')) {
    bodyA.charTypeClass.health -= 5;
    updateHealth(bodyA.label, bodyA.charTypeClass.health);
    if (bodyA.charTypeClass.health <= 0) {
      alert(`${bodyA.label} has perished!`);
    }
  }
  if ((bodyB.label === 'knight' && bodyA.label === 'axe') ||
      (bodyB.label === 'viking' && bodyA.label === 'sword')) {
    bodyB.charTypeClass.health -= 5;
    updateHealth(bodyB.label, bodyB.charTypeClass.health);
    if (bodyB.charTypeClass.health <= 0) {
      alert(`${bodyB.label} has perished!`);
    }
  }
};
