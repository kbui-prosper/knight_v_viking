import { Composites, Composite } from 'matter-js';

import {
  worldWidth,
  worldHeight
} from '../knight_v_viking';

import {
  boundThickness,
  wallBlock,
  groundBlock,
  invisibleLeftWall,
  invisibleRightWall,
  invisibleGround
} from './environment_bodies_constructors';

// Composites.stack(xx, yy, columns, rows, columnGap, rowGap, callback)

export const ceiling = () => Composites.stack(
  0, 0,
  worldWidth / boundThickness, 1,
  0, 0,
  wallBlock
);

export const leftWall = () => Composite.add(
  Composites.stack(
    0, 0,
    1, worldHeight / boundThickness,
    0, 0,
    wallBlock
  ),
  invisibleLeftWall()
);

export const rightWall = () => Composite.add(
  Composites.stack(
    worldWidth - boundThickness, 0,
    1, worldHeight / boundThickness,
    0, 0,
    wallBlock
  ),
  invisibleRightWall()
);

export const ground = () => Composite.add(
  Composites.stack(
    0, worldHeight - boundThickness,
    worldWidth / boundThickness, 1,
    0, 0,
    groundBlock
  ),
  invisibleGround()
);
