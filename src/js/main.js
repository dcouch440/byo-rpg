import '../css/styles.css';
import {Rpg} from './classes/Rpg.js';

let rpg = new Rpg()
 
rpg.setActor('Bob');

console.log(rpg.actors['Bob']);