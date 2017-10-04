import { Events } from 'matter-js';

import {
  onWallHandler, touchGroundHandler, leaveGroundHandler
} from './collision_event_helpers';

export default engine => {
  Events.on(engine, 'collisionActive', event => {
    event.pairs.forEach(pair => {
      const { bodyA, bodyB } = pair;
      onWallHandler(bodyA, bodyB);
    });
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
