import { Engine, Render, World } from 'matter-js';

import {
  ground, leftWall, rightWall, ceiling
} from './bodies/environment_constructors';

export const worldWidth = 1200;
export const worldHeight = 600;

document.addEventListener('DOMContentLoaded', () => {
  const engine = Engine.create();

  const render = Render.create({
      element: document.querySelector(".canvas-wrapper"),
      engine,
      options: {
        wireframeBackground: 'transparent',
        width: worldWidth,
        height: worldHeight
      }
  });

  World.add(engine.world, [ground(), leftWall(), rightWall(), ceiling()]);

  Engine.run(engine);

  Render.run(render);
});
