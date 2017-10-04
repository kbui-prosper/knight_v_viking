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
        bodyA.charTypeClass.onWall = true;
      }
      if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
          bodyA.label === 'invisibleGround') {
        bodyB.charTypeClass.onWall = true;
      }
    });
  });

  Events.on(engine, 'collisionEnd', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
      if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
          bodyB.label === 'invisibleWall') {
        bodyA.charTypeClass.onWall = false;
      }
      if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
          bodyA.label === 'invisibleWall') {
        bodyB.charTypeClass.onWall = false;
      }
    });
  });
};
