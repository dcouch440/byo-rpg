import '../css/styles.css';
import {Rpg} from './classes/Rpg.js';

let rpg = new Rpg();
rpg.setActor('Monster', 1000, 20, 10);
rpg.setActor('Player', 100, 100, 10);

// console.log(rpg.actors['Bob']);

const display = (game) => {
  const {actors} = game;
  let objects = Object.values(actors);
  
  return objects.map((objKey) => {
    const {name, health, attack, defense} = objKey;
    return`
      <div class="card">
        <div>Name ${name}</div>
        <div>Health ${health}</div>
        <div>Attack ${attack}</div>
        <div>Defense ${defense}</div>
      </div>`;
  }).join('');
};
const action = (turnAction, element) => {
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
        element.innerHTML = "AHHHHHH";
    }, 
      'default': () => null
  };
  return (conditional[turnAction] || conditional['default'])();
};
document.addEventListener('DOMContentLoaded',() => {
  const ourElement = document.getElementById('exist');
  const actionButtons = document.getElementById('button-container');
  ourElement.innerHTML = display(rpg);
  actionButtons.addEventListener('click', (event) => {
    const {id} = event.target;
    ourElement.innerHTML = display(rpg);
    action(id, ourElement);
    
    console.log(rpg.checkIfDead());
    if(rpg.checkIfDead() != null)
    {
      ourElement.innerHTML =  `You have ${rpg.checkIfDead() === "Monster" ? 'won' : 'lost'} the battle!`;

    }
    
  });
});
