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
