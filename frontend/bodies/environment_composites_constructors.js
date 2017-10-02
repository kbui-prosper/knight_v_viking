import { Composites } from 'matter-js';

import {
  worldWidth,
  worldHeight
} from '../knight_v_viking';

import {
  boundThickness,
  wallBlock,
  groundBlock
} from './environment_bodies_constructors';

// Composites.stack(xx, yy, columns, rows, columnGap, rowGap, callback)

export const leftWall = () => Composites.stack(
  0, 0,
  1, worldHeight / boundThickness,
  0, 0,
  wallBlock
);

export const rightWall = () => Composites.stack(
  worldWidth - boundThickness, 0,
  1, worldHeight / boundThickness,
  0, 0,
  wallBlock
);

export const ground = () => Composites.stack(
  0, worldHeight - boundThickness,
  worldWidth / boundThickness, 1,
  0, 0,
  groundBlock
);
