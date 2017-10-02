import { Engine, Render, World, Bodies } from 'matter-js';

import {
  leftWall, rightWall, ground, ceiling
} from './bodies/environment_composites_constructors';

export const worldWidth = 1200;
export const worldHeight = 600;

document.addEventListener('DOMContentLoaded', () => {
  const engine = Engine.create();

  const render = Render.create({
      element: document.querySelector(".canvas-wrapper"),
      engine,
      options: {
        background: 'transparent',
        width: worldWidth,
        height: worldHeight,
        wireframes: false
      }
  });

  // Environment
  World.add(
    engine.world,
    [
      ceiling(),
      leftWall(),
      rightWall(),
      ground()
    ]
  );

  // ---------- Test ----------
  const testBall = () => Bodies.circle(
    Math.random() * worldWidth, Math.random() * 100 + 100,
    (Math.random() * 50) + 25,
    {
      render: { fillStyle: '#c0392b' },
      restitution: 1
    }
  );
  World.add(
    engine.world,
    [testBall(), testBall(), testBall(), testBall(), testBall(),
    testBall(), testBall(), testBall(), testBall(), testBall()]
  );
  // ---------- /Test ----------

  Engine.run(engine);

  Render.run(render);

  window.leftWall = leftWall();
});
