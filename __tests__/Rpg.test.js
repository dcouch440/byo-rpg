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
    rpg.setActor("Bob", 400, 10, 3);
    expect(rpg.getActor("Bob")).toEqual({"name":"Bob","health":400,"attack":10,"defense": 3});
  });
  test ("It will return the current value of the given Actors health", () => {
    rpg.setActor("Bob");
    rpg.getHealth("Bob");
    expect(rpg.getHealth("Bob")).toEqual(400);
  });
  test("It will decrease the health of an Actor by the given argument value", () => {
    rpg.setActor('Monster', 5000, 20, 10);
    rpg.setActor('Player', 500, 100, 10);
    rpg.setDamage('Player', "Monster");
    expect(rpg.getHealth("Monster")).toEqual(4910);
  });
  
  test("It will add actor names to an actor Array", () => {
    rpg.setActor('Bob');
    rpg.setActor('Bob');
    expect(rpg.actorsArray).toEqual(['Bob', "BobJr"]);
  });
  
  test("It will select Actors turns from an array", () => {
    rpg.setActor('Monster')
    rpg.setActor('Bob');
    rpg.setActor('Doe');
    let turn = rpg.turn();
    turn.next();
    turn.next();
    expect(turn.next().value).toEqual('Bob');
    expect(rpg.currentTurn).toEqual('Bob');
  }) 
})