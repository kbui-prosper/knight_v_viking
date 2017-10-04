import { Events } from 'matter-js';

export default engine => {
  Events.on(engine, 'collisionActive', event => {
    // event.pairs.forEach(pair => {
    //   const { bodyA, bodyB } = pair;
    //   if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
    //       bodyB.label === 'invisibleWall') {
    //     bodyA.friction = 0;
    //   }
    //   if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
    //       bodyA.label === 'invisibleWall') {
    //     bodyB.friction = 0;
    //   }
    // });
  });

  Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
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
    });
  });

  Events.on(engine, 'collisionEnd', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
      if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
          bodyB.label === 'invisibleGround') {
        bodyA.charTypeClass.onGround = false;
      }
      if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
          bodyA.label === 'invisibleGround') {
        bodyB.charTypeClass.onGround = false;
      }
    });
  });
};
