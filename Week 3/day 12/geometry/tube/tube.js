//import class ThreeDimention
const Geometry = require('./geometry');
const ThreeDimension = require('./threeDimention');

//make the class of the Tube
class Tube extends ThreeDimension{
    constructor(radius, height) {
        super('Tube');
        this.radius = radius;
        this.height = height;

    }

    //create the method calculateCircumference
    calculateArea(){
        // super.calculateCircumference(); //call parent of the class
         const phi = 3.14;
         return 2 * phi * this.radius * this.height;
     }

    //create the method calculateCircumference
    calculateCircumference(){
       // super.calculateCircumference(); //call parent of the class
        const phi = 3.14;
        return phi * this.radius * this.radius * this.height;
    }
}

let newTube = new Tube(5,12);
console.log(newTube.calculateCircumference());

let newArea = new Tube(24,12);
console.log(newArea.calculateArea());


// let tesHello = new Geometry('tes');
// console.log(tesHello.hello());