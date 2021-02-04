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

document.addEventListener('DOMContentLoaded',() => {
  const ourElement = document.getElementById('exist');
  const ourButton = document.getElementById('button-proto');
  ourElement.innerHTML = display(rpg, "Bob");
  ourButton.addEventListener('click', () => {
    rpg.setDamage('Bob', 5);
    ourElement.innerHTML = display(rpg, "Bob");
  })
} )