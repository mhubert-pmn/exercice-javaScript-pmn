/* programme stockage tableau
* but : effectuer somme de nombres entiers et détermination d'indice
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

const scanf = require('scanf');

console.log("Entrer cinq entiers");
let numbers = scanf("%d %d %d %d %d");

let index = (array) => {
    return array.indexOf(Math.max.apply(null, array))
};

console.log(`L'indice du plus grand entier est ${index(numbers)}`);

let average = (array) => {
    return array.reduce((a,b) => a + b, 0)
};

console.log(`La moyenne des entiers est ${average(numbers)}`);