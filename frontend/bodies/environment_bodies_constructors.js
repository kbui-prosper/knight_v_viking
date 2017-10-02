import { Bodies } from 'matter-js';
import { worldWidth, worldHeight } from '../knight_v_viking';

export const boundThickness = 50;

// Bodies.rectangle(x, y, width, height, [options])

export const wallBlock = (x, y) =>
  Bodies.rectangle(
    x, y,
    boundThickness, boundThickness,
    {
      isStatic: true,
      render: {
        sprite: {
          texture: window.environmentWallPNG,
          xScale: 0.2,
          yScale: 0.2,
        }
      }
    }
  );

//
// export const leftWall = () => Bodies.rectangle(
//   boundThickness / 2, worldHeight / 2,
//   boundThickness, worldHeight,
//   { isStatic: true }
// );
//
// export const rightWall = () => Bodies.rectangle(
//   worldWidth - boundThickness / 2,
//   worldHeight / 2, boundThickness, worldHeight,
//   { isStatic: true }
// );
//
// export const ceiling = () => Bodies.rectangle(
//   worldWidth / 2, boundThickness / 2,
//   worldWidth, boundThickness,
//   { isStatic: true }
// );
//
// export const ground = () => Bodies.rectangle(
//   worldWidth / 2, worldHeight - boundThickness / 2,
//   worldWidth, boundThickness,
//   {
//     isStatic: true,
//     render: {
//       fillStyle: '#4ECDC4',
//       sprite: {
//         texture: window.environmentGroundPNG
//       }
//     }
//   }
// );

export const testBall = () => Bodies.circle(
  worldWidth / 2, 200,
  50,
  {
    render: { fillStyle: '#c0392b' },
    restitution: 0.8
  }
);
