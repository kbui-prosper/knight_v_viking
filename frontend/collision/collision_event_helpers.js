export const touchGroundHandler = (bodyA, bodyB) => {
  if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
      bodyB.label === 'invisibleGround') {
    bodyA.charTypeClass.onGround = true;
    bodyA.charTypeClass.setDefaultFriction();
  }
  if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
      bodyA.label === 'invisibleGround') {
    bodyB.charTypeClass.onGround = true;
    bodyB.charTypeClass.setDefaultFriction();
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
