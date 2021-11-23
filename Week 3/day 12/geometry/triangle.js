const TwoDimension = require('./twoDimension');

class Triangle extends TwoDimension{
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    //Overridding method
    calculateArea(){
        //return this.width ** 2;
        super.calculateArea(); //call parent class
        
        return (this.base * this.height) / 2;
    }

    calculateCircumference(){
        //return this.width * 4;
        //console.log(`who are you? ${who}`);
        super.calculateCircumference();
        return this.base * 3;
    }
}

 let triangleOne = new Triangle(10, 11);
// //console.log(squareOne);
console.log(triangleOne.calculateArea());
console.log(triangleOne.calculateCircumference());