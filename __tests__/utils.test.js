import {checkValid} from '../src/js/utils.js'
import {Rpg} from '../src/js/classes/Rpg.js'
describe("checkValid", () => {
  let rpg;
  beforeEach(() => {
    rpg = new Rpg();
  });
  test("It will check if the key values already exist and return Jr at the end of the argument value", () => {
    rpg.setActor('Bob');
    expect(checkValid('Bob', rpg)).toEqual('BobJr');
  });
  test("It will check if the key values already exist and return the input value if the value is not found", () => {
    expect(checkValid('Bob', rpg)).toEqual(undefined)
  })
})