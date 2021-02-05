import * as utils from '../utils.js';
import {Actor} from './Actor.js';

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
  setDamage(nameKey1, nameKey2, defending = 0) {
    this.actors[nameKey2].health -= 
    (this.actors[nameKey1].attack - this.actors[nameKey2].defense - defending*5);
  }

  gainHealth(nameKey, hp)
  {
    this.actors[nameKey].health += hp;
  }
  checkIfDead()
  {
  let objects = Object.values(this.actors);
  for(const actor of objects){

    if(actor.health <= 0)
      return actor.name;
  }
  return null;
  }
}

