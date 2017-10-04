import { Events } from 'matter-js';

export default engine => {
  // manually removing friction from side walls
  Events.on(engine, 'collisionActive', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
      if ((bodyA.label === 'knight' || bodyA.label === 'viking') &&
          bodyB.label === 'invisibleWall') {
        bodyA.friction = 0;
      }
      if ((bodyB.label === 'knight' || bodyB.label === 'viking') &&
          bodyA.label === 'invisibleWall') {
        bodyB.friction = 0;
      }
    });
  });
};
