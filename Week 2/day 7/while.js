let i = 0;

// while (i < 10) {
//   console.log(`${i}. Hello world`);
//   i++;
// }

while (i < 10) {
  i++;
  console.log(`${i}. Hello world`);
}

console.log("----------");
console.log("Loop Array using While");
console.log("-----------");
let students = [
  "hardi",
  "dhea",
  "falah",
  "agif",
  "fajar",
  "umam",
  "nanda",
  "adi",
  "arsyad",
  "anggun",
];

let index = 0;
while (index < students.length) {
  console.log(`${students[index]} is my student.`);
  index++;
}
