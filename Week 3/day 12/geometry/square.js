const TwoDimension = require('./twoDimension');

class Square extends TwoDimension{
    constructor(width) {
        super('Square');
        this.width = width;
    }

    //Overridding method
    calculateArea(){
        //return this.width ** 2;
        super.calculateArea(); //call parent class
    
        return this.width ** 2;
    }

    calculateCircumference(){
        //return this.width * 4;
        //console.log(`who are you? ${who}`);
        super.calculateCircumference();
        return this.width * 4;
    }
}

 let squareOne = new Square(10);
// //console.log(squareOne);
console.log(squareOne.calculateArea());
// console.log(squareOne.calculateCircumference());