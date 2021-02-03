import {Actor} from './Actor.js';

export class Rpg {
  constructor() {
    this.actors = {};
  }
  setChar(actorName) {
    const newChar = new Actor(actorName);
    const {name} = newChar;
    this.actors[name] = newChar;
  }
  get health() {
    return this._health;
  }
  set health(newHealth) {
    this._health = newHealth;
  }
}
