import { Bodies } from 'matter-js';

const baseCharacter = (charType) => () => {
  const character = Bodies.rectangle(
    300, 300,
    75, 100,
    {
      render: {
        lineWidth: 5,
        sprite: {
          texture: charType.idlePNGs[0],
          xScale: 0.12,
          yScale: 0.12
        }
      }
    }
  );

  return character;
};

export const knight = baseCharacter(window.knight);
export const viking = baseCharacter(window.viking);
