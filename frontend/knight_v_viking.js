import { Engine, Render, World, Bodies } from 'matter-js';

document.addEventListener('DOMContentLoaded', () => {
  const engine = Engine.create();

  const render = Render.create({
      element: document.querySelector(".canvas-wrapper"),
      engine,
      options: {
        wireframeBackground: 'rgba(255, 0, 0, 0.3)',
        width: 1200,
        height: 600
      }
  });

  const ground = Bodies.rectangle(400, 610, 800, 100, { isStatic: true });
  const leftWall = Bodies.rectangle(0, 300, 100, 600, { isStatic: true });
  const rightWall = Bodies.rectangle(800, 300, 100, 600, { isStatic: true });
  const ceiling = Bodies.rectangle(400, 0, 800, 100, { isStatic: true });

  World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

  Engine.run(engine);

  Render.run(render);

  window.render = render;
});
