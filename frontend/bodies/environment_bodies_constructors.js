import { Bodies } from 'matter-js';
import { worldWidth, worldHeight } from '../knight_v_viking';

const boundThickness = 50;

export const leftWall = () => Bodies.rectangle(
  boundThickness / 2, worldHeight / 2,
  boundThickness, worldHeight,
  { isStatic: true }
);

export const rightWall = () => Bodies.rectangle(
  worldWidth - boundThickness / 2,
  worldHeight / 2, boundThickness, worldHeight,
  { isStatic: true }
);

export const ceiling = () => Bodies.rectangle(
  worldWidth / 2, boundThickness / 2,
  worldWidth, boundThickness,
  { isStatic: true }
);

export const ground = () => Bodies.rectangle(
  worldWidth / 2, worldHeight - boundThickness / 2,
  worldWidth, boundThickness,
  {
    isStatic: true,
    render: {
      fillStyle: '#4ECDC4',
    }
  }
);