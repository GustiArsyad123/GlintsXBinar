const Geometry = require('./geometry');
class ThreeDimension extends Geometry {
    constructor(name){
        super(name, 'Three Dimenssion');
    
        //make abstract
        // if (this.constructor = TwoDimension) {
        //     throw new Error('Cannot instantiate from Abstract Class'); //bacause it's abstract
        // }
    
    }

    calculateArea(){
        console.log(`Calculate ${this.name} area`);
    }

    //private hanya dipanggil didalam kelas saja
    #calculateArea(){
        console.log(`Calculate ${this.name} area`);
    }

    //method for call
    // callArea(){
    //     this.#calculateArea();
    // }
    
    calculateCircumference(){
        console.log(`Calculate ${this.name} Circumference`);
    }

}

// let one = new TwoDimension('Square');
// console.log(one);
// one.hello();

//export file twoDimension
module.exports = ThreeDimension;