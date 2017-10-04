import { Events } from 'matter-js';

import {
  touchGroundHandler, leaveGroundHandler
} from './collision_event_helpers';

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
      touchGroundHandler(bodyA, bodyB);
    });
  });

  Events.on(engine, 'collisionEnd', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
      leaveGroundHandler(bodyA, bodyB);
    });
  });
};
