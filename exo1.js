/* programme comparaison chaînes
* but : comparer la taille d'une châine à une autre
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

const scanf = require('scanf');

/* test
console.log("Entrez votre nom :");
let name = scanf('%s');
console.log(`Votre nom est : ${name}`);
*/

console.log("Entrer une première chaîne de caractères");
let chaine1 = scanf("%S");

console.log("Entrer une deuxième chaîne de caractères");
let chaine2 = scanf("%S");

let comparison = () => {
    if (chaine1.length >= chaine2.length*2) {
        return "la chaîne 1 est au moins deux fois plus grande que la chaîne 2"
    } else {
        return "la chaîne 1 n'est pas deux fois plus grande que la chaîne 2"
    }
};

console.log(comparison());