/* classe Point 
* but : creation de la classe Point
* auteur : Matthieu Hubert
* date : 14/04/2021
*/

class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    stringify = Point.prototype.toString = () => {
        console.log(`x : ${this.getX()}, y : ${this.getY()}`)
    };
};

module.exports = Point;