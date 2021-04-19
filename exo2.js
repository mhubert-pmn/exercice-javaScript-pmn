/* programme somme nombres
* but : effectuer somme de nombres entiers
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

const scanf = require('scanf');

console.log("Entrer un nombre");
let userNumber = scanf("%d");

let sum = 0;

let sumCalculation = () => {
    for (let i=0; i < userNumber; i++) {
        sum = sum + i
    }
    return sum + userNumber
};

console.log(`La somme est ${sumCalculation()}`);