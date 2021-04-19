/* classe Hippopotamus 
* but : creation de la classe Hippopotamus
* auteur : Matthieu Hubert
* date : 14/04/2021
*/


class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }
    swim = () => (this.weight -= 0.3);
    eat = () => this.weight += 1;
    fight = (hippo1, hippo2) => {
        if (hippo1.tusksSize > hippo2.tusksSize) {
            return `${hippo1.name} a les plus grandes défenses, il l'emporte`
        } else if (hippo1.tusksSize < hippo2.tusksSize) {
            return `${hippo2.name} a les plus grandes défenses, il l'emporte`
        } else {
            return "égalité"
        }
    };
    stringify = Hippopotamus.prototype.toString = () => {
        return `name : ${this.name}, weight : ${this.weight}, tusksSize : ${this.tusksSize}`
    };
    hours = () => {
        for (let hours = 1; hours < 16; hours++) {
            for (let i = 0; i < 2; i++) {
                this.eat()
            }
            for (let j = 0; j < 3; j++) {
                this.swim()
            }
        }
        return(this.weight)
    }
    lifeCycle = () => {
        for (let days = 1; days < 22; days++) {
            this.hours()
            console.log(`day : ${days},`, this.stringify())
        }
        return
    }
};



module.exports = Hippopotamus;