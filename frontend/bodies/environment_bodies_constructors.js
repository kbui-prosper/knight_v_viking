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
      friction: 0,
      label: 'worldBoundary',
      render: {
        // fillStyle: 'brown',
        sprite: {
          texture: window.environmentWallPNG,
          xScale: 0.11,
          yScale: 0.11,
        }
      }
    }
  );

export const groundBlock = (x, y) =>
  Bodies.rectangle(
    x, y,
    boundThickness, boundThickness,
    {
      isStatic: true,
      label: 'worldBoundary',
      render: {
        sprite: {
          texture: window.environmentGroundPNG,
          xScale: 0.1,
          yScale: 0.1,
        }
      }
    }
  );

export const invisibleGround = () =>
  Bodies.rectangle(
    worldWidth / 2, worldHeight - boundThickness - 1,
    worldWidth, 1,
    {
      label: 'invisibleGround',
      isStatic: true,
      render: {
        fillStyle: 'transparent'
      }
    }
  );

export const invisibleLeftWall = () =>
  Bodies.rectangle(
    boundThickness, worldHeight / 2,
    1, worldHeight,
    {
      isStatic: true,
      friction: 0,
      render: {
        fillStyle: 'red'
      }
    }
  );

export const invisibleRightWall = () =>
  Bodies.rectangle(
    worldWidth - boundThickness, worldHeight / 2,
    1, worldHeight,
    {
      isStatic: true,
      friction: 0,
      render: {
        fillStyle: 'red'
      }
    }
  );
