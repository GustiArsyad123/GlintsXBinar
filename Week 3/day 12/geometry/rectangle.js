const TwoDimension = require('./twoDimension');

class Rectangle extends TwoDimension{
    constructor(width, length) {
        super('Rectangle');
        this.width =  width;
        this.length = length;
    }

    //Overridding method
    calculateArea(){
        //return this.width ** 2;
        super.calculateArea(); //call parent class
        
        return this.width * this.length;
    }

    calculateCircumference(){
        //return this.width * 4;
        //console.log(`who are you? ${who}`);
        super.calculateCircumference();
        return (this.width + this.length) * 2;
    }
}

 let rectangleOne = new Rectangle(10, 11);
// //console.log(squareOne);
console.log(rectangleOne.calculateArea());
console.log(rectangleOne.calculateCircumference());