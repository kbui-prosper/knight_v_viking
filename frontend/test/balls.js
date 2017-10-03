import { World, Bodies } from 'matter-js';

import { worldWidth } from '../knight_v_viking';

// ---------- Test ----------
const testBall = () => Bodies.circle(
  Math.random() * worldWidth, Math.random() * 100 + 100,
  (Math.random() * 10) + 10,
  {
    render: { fillStyle: '#c0392b' },
    restitution: 0.5
  }
);

export const addBalls = (engine, numBalls) => {
  const balls = [];
  for (let i = 0; i < numBalls; i++) {
    balls.push(testBall());
  }
  World.add(
    engine.world,
    balls
  );
};
