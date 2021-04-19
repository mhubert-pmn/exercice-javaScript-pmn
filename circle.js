/* classe Circle 
* but : creation de la classe Circle
* auteur : Matthieu Hubert
* date : 14/04/2021
*/
let Point = require("./point");

class Circle {
    constructor(point, radius) {
        point = this.point
        radius = this.radius
    }

    area = () => {
        return Math.PI * this.radius * this.radius;
    }

    containsPoint = (testedPoint) => {
        let distPoint = (this.point.getX() - testedPoint.getX())^2 + (this.point.getY() - testedPoint.getY())^2
        if (distPoint < area()) {
            return true
        } else return false
    }


    stringify = Circle.prototype.toString = () => {
        console.log(`area : ${this.area}, contains point :  ${this.containsPoint()}`)
    };
}

module.exports = Circle;