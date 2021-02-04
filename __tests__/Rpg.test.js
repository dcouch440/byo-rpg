import {Rpg} from '../src/js/classes/Rpg.js';

describe('Rpg', () => {
  let rpg
  beforeEach(() => {
    rpg = new Rpg();
  });
  test("It will create an object that holds the object for our actors", () => {
    expect(rpg).toEqual({actors: {}, actorsArray: undefined, currentTurn: ''});
  });
  test("It will set an Actor object inside the actors object within the Rpg object.", () => {
    rpg.setActor("Bob");
  const {name, health} = rpg.actors["Bob"];
    expect(name).toEqual("Bob");
    expect(health).toEqual(400);
  });
  test("It will return an Actor object with Bob as its name and 400 as its health.", () => {
    rpg.setActor("Bob");
    expect(rpg.getActor("Bob")).toEqual({"name":"Bob","health":400});
  });
  test ("It will return the current value of the given Actors health", () => {
    rpg.setActor("Bob");
    rpg.getHealth("Bob");
    expect(rpg.getHealth("Bob")).toEqual(400);
  });
  test("It will decrease the health of an Actor by the given argument value", () => {
    rpg.setActor("Bob");
    rpg.setDamage("Bob", 200);
    expect(rpg.getHealth("Bob")).toEqual(200);
  });
  
  test("It will add actor names to an actor Array", () => {
    rpg.setActor('Bob');
    rpg.setActor('Bob');
    expect(rpg.actorsArray).toEqual(undefined)
  });

})