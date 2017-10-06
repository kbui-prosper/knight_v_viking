import { Engine, Render, World, Bodies, Composite } from 'matter-js';

import {
  leftWall, rightWall, ground, ceiling
} from './bodies/environment_composites_constructors';

import {
  Knight, Viking
} from './bodies/characters_constructors';

import collisionEventHandlers from './collision/collision_event_handlers';

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

  // test
  // window.setTimeout(() => addBalls(engine, 100), 2000);
  // addBalls(engine, 200);
  // test

  // Characters
  const knight = new Knight(engine);
  const viking = new Viking(engine);
  World.add(
    engine.world,
    [
      knight.body,
      viking.body
    ]
  );

  Engine.run(engine);
  Render.run(render);
  collisionEventHandlers(engine);

  document.querySelector('.start-game').addEventListener('click', () => {
    // if (knight || viking) {
    //   Composite.remove(engine.world, knight.body);
    //   Composite.remove(engine.world, knight.body);
    // }

    knight.setKeyListeners();
    viking.setKeyListeners();
    document.querySelector('.welcome-screen').style.visibility = 'hidden';
    document.querySelector('.start-game').style.visibility = 'hidden';
  });
});
