import { Bodies } from 'matter-js';
import { worldWidth, worldHeight } from '../knight_v_viking';

export const ground = () => Bodies.rectangle(
  worldHeight, 610, worldWidth, 100, {
    isStatic: true,
    render: {
      fillStyle: '#34495e',
      opacity: 1,
      strokeStyle: '#34495e'
    }
  }
);

export const leftWall = () => Bodies.rectangle(
  0, 300, 100, worldHeight, { isStatic: true }
);
export const rightWall = () => Bodies.rectangle(
  worldWidth, 300, 100, worldHeight, { isStatic: true }
);
export const ceiling = () => Bodies.rectangle(
  worldHeight, 0, worldWidth, 100, { isStatic: true }
);
