const fruits = ["Apple", "Banana", "Pineapple", "Watermelon"];

//the first way
// let temp = fruits[1];
// fruits[1] = fruits[0];
// fruits[0] = temp;

//the second way
//[fruits[0], fruits[1]] = fruits[1], fruits[0];
[fruits[0], fruits[1], fruits[2], fruits[3]] = [
fruits[1], 
fruits[0],
fruits[3],
'umam',
];

console.log(fruits);