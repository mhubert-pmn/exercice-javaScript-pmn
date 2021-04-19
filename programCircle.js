/* classe Circle 
* but : utilisation de la classe Circle
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

let Circle = require("./circle");
let Point = require("./point");

let pointCircle = new Point(1, 2);
let circleTest = new Circle(pointCircle, 3)
circleTest.stringify()