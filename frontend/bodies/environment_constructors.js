import { Bodies } from 'matter-js';
import { worldWidth, worldHeight } from '../knight_v_viking';

export const leftWall = () => Bodies.rectangle(
  0, worldHeight / 2, 100, worldHeight,
  { isStatic: true }
);

export const rightWall = () => Bodies.rectangle(
  worldWidth, worldHeight / 2, 100, worldHeight,
  { isStatic: true }
);

export const ceiling = () => Bodies.rectangle(
  worldWidth / 2, 0, worldWidth, 100,
  { isStatic: true }
);

export const ground = () => Bodies.rectangle(
  worldWidth / 2, worldHeight, worldWidth, 100,
  {
    isStatic: true,
    render: {
      fillStyle: '#4ECDC4',
    }
  }
);
