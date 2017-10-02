import { Bodies } from 'matter-js';

const baseCharacter = (charType) => () =>
  Bodies.rectangle(
    300, 300,
    50, 100,
    {
      render: {
        fillStyle: 'blue'
      }
    }
  );

export const knight = baseCharacter(null);
export const viking = baseCharacter(null);
