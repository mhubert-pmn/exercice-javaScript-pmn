/* classe Hippopotamus 
* but : utilisation de la classe Hippopotamus
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

let Hippopotamus = require("./hippo");

let contestant1 = new Hippopotamus("fred", 500, 200)
let contestant2 = new Hippopotamus("george", 500, 100)
let combatTest = new Hippopotamus;

console.log(combatTest.fight(contestant1, contestant2))
console.log(contestant1.lifeCycle())