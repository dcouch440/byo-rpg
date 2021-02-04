import * as utils from '../utils.js';
import {Actor} from './Actor.js';
import {Monster} from './Monster.js';

export class Rpg {
  constructor() {
    this.actors = {};
    this.actorsArray = undefined;
    this.currentTurn = '';
  }
  *turn () {
    let i = 1;
    while(true) {
      if(i > this.actorsArray.length - 1){i = 1}
      this.currentTurn = this.actorsArray[i];
      yield this.actorsArray[i++];
    }
  }
  getActor(actorName) {
    return this.actors[actorName];
  }
  setActor(actorName, health = 400, attack = 30, defence = 5) {
    let validName = utils.checkValid(actorName, this);
    let newChar = new Actor(validName, health, attack, defence);
    const {name} = newChar;
    this.actors[name] = newChar;
    this.actorsArray = Object.keys(this.actors);
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

