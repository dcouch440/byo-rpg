import {Actor} from './Actor.js';
const checkValid = (actorName, thisArg) => {
  const {actors} = thisArg;
  if (Object.entries(actors).length !== 0) {
    return Object.keys(actors).includes(actorName) ? `${actorName}Jr` : actorName;
  } else {
    return actorName;
  }
};
export class Rpg {
  constructor() {
    this.actors = {};
  }
  getActor(actorName) {
    return this.actors[actorName];
  }
  setActor(actorName) {
    let validName = checkValid(actorName, this);
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
