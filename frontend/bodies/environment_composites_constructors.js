import { Composites } from 'matter-js';

import {
  worldWidth,
  worldHeight
} from '../knight_v_viking';

import {
  boundThickness,
  wallBlock
} from './environment_bodies_constructors';

export const leftWall = () => Composites.stack(
  0, 0,
  1, worldHeight / boundThickness,
  0, 0,
  (x, y) => wallBlock(x, y)
);
