import {Rpg} from '../src/js/classes/Rpg.js';

describe('Rpg', () => {
  let rpg
  beforeEach(() => {
    rpg = new Rpg();
  });
  test("It will create an object that holds the object for our actors", () => {
    expect(rpg).toEqual({actors: {}});
  });
})