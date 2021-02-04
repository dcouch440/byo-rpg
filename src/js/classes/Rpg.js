import * as utils from '../utils.js'
import {Actor} from './Actor.js';

export class Rpg {
  constructor() {
    this.actors = {};
    this.actorsArray = undefined;
    this.currentTurn = '';
  }
  getActor(actorName) {
    return this.actors[actorName];
  }
  setActor(actorName) {
    let validName = utils.checkValid(actorName, this);
    let newChar = new Actor(validName);
    const {name} = newChar;
    this.actors[name] = newChar;
  }
  getHealth(nameKey) {
    return this.actors[nameKey].health;
  }
  setDamage(nameKey, damage) {
    this.actors[nameKey].health = (
      this.actors[nameKey].health - damage
    );
  }
}
