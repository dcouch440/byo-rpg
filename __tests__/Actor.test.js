import {Actor} from '../src/js/classes/Actor.js'

describe("Actor", () => {
  let actor;
  beforeEach(() => {
    actor = new Actor("Bob")
  });
  test("It will create an object with the given argument as name", () => {
    expect(actor).toEqual({"name":"Bob","health":400,"attack":10,"defense": 3});
  });
})