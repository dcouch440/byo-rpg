import '../css/styles.css';
import {Rpg} from './classes/Rpg.js';

let rpg = new Rpg();
rpg.setActor('Monster', 5000, 20, 10);
rpg.setActor('Player', 500, 100, 10);
console.log(rpg.actors);
// console.log(rpg.actors['Bob']);

const display = (rpg, actorArg) => {
  const actor = rpg.getActor(actorArg)
  return`
    <div>
      <p>${actor.name}</p>
      <p>${actor.health}</p>
    </div>
    `
}
const action = (turnAction) => {
  const conditional = {
    'fight': () =>  {
      rpg.setDamage("Player","Monster");
      rpg.setDamage("Monster","Player");
    }, 
      'item': () => {
      rpg.gainHealth('Player', 100);
      rpg.setDamage("Monster","Player");
    }, 
      'defend': () => {
      rpg.setDamage("Monster","Player", 1);
    }, 
      'run': () => {
      console.log('AHHHHHH')
    }, 
      'default': () => null
  }
  return (conditional[turnAction] || conditional['default'])();
}
document.addEventListener('DOMContentLoaded',() => {
  const ourElement = document.getElementById('exist');
  const actionButtons = document.getElementById('button-container');
  ourElement.innerHTML = display(rpg, "Monster") + display(rpg,"Player");
  actionButtons.addEventListener('click', (event) => {
    const {id} = event.target;
    action(id);
    ourElement.innerHTML = display(rpg, "Monster") + display(rpg, "Player");
  });
})
