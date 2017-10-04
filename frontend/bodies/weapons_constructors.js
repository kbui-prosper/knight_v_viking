import { Bodies } from 'matter-js';

class BaseWeapon {

}

export class Sword extends BaseWeapon {
  constructor (charPostition) {
    super();
    const { x, y } = charPostition;
    this.body = Bodies.rectangle(
      x, y,
      20, 20
    );
  }
}

export class Axe extends BaseWeapon {
  constructor (charPostition) {
    super();
    const { x, y } = charPostition;
    this.body = Bodies.rectangle(
      x, y,
      20, 20
    );
  }
}
