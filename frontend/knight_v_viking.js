import { Engine, Render, World, Bodies } from 'matter-js';

import {
  leftWall, rightWall, ground, ceiling
} from './bodies/environment_composites_constructors';

import {
  Knight, Viking
} from './bodies/characters_constructors';

//test
import { addBalls } from './test/balls.js';
//test

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

  // Characters
  const knight = new Knight();
  const viking = new Viking();
  World.add(
    engine.world,
    [
      knight.body,
      viking.body
    ]
  );

  // test
  // window.setInterval(() => addBalls(engine, 15), 2000);
  // addBalls(engine, 200);
  // test

  Engine.run(engine);

  Render.run(render);

  window.leftWall = leftWall();
});
