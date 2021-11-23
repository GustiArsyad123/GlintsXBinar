const { Rectangle, Square, Triangle } = require('./geometry');

let rectangleOne = new Rectangle(10, 11);
let squareOne = new Square(12);
let triangleOne = new Triangle(13, 14);

//calculate area
let a = rectangleOne.calculateArea();
let b = squareOne.calculateArea();
let c = triangleOne.calculateArea();
let d = a + b + c;
console.log(d);
