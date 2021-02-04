import '../css/styles.css';
import {Rpg} from './classes/Rpg.js';

let rpg = new Rpg()
 
rpg.setActor('Bob');

console.log(rpg.actors['Bob']);

const display = (rpg, actorArg) => {
  const actor = rpg.getActor(actorArg)
  return`
    <div>
      <p>${actor.name}</p>
      <p>${actor.health}</p>
    </div>
  `
}
// const myFunction = (typeOfEnemy, gameAction) => {
//   const turnFunc = (cond) => {
//     const conditional = {
//       '1': () => 'the ran',
//       '2': () => 'actor Obj',
//       '3': () => 'none-apply'
//     }
//     return (conditional[cond] || conditional['default'])()
//   }
//   const actionFunc = (cond = gameAction) => {
//     const conditional = {
//       '1' : (actor) => 'home' + actor ,
//       'damage turn' : (actor) => 'damage turn' + actor,
//       'default': () => 'none-apply'
//     }
//     return (conditional[cond] || conditional['default'])(turnFunc(typeOfEnemy))
//   }
//   return actionFunc()
// }
const action = (turnAction) => {
  const conditional = {
    'fight': () => {
      console.log('Hello1')
    }, "item": () => {
      console.log('Hello2')
    }, 'defend': () => {
      console.log('Hello3')
    }, 'run': () => {
      console.log('Hello4')
    }, 'default': () => null
  }
  return (conditional[turnAction] || conditional['default'])()
}

document.addEventListener('DOMContentLoaded',() => {
  const ourElement = document.getElementById('exist');
  const actionButtons = document.getElementById('button-container');
  ourElement.innerHTML = display(rpg, "Bob");
  actionButtons.addEventListener('click', (event) => {
    const {id} = event.target
    action(id)
    rpg.setDamage('Bob', 200);
    ourElement.innerHTML = display(rpg, "Bob");
    // if(rpg.getHealth("Bob") <= 0)
    // {
    //   ourElement.innerHTML = "Bob dead";
    // }
  });
})
