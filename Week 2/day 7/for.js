for (let i = 0; i < 10; i++) {
  console.log(`${i}. Hello World!`);
}

let greeting = (person) => {
  let name = person ? person.name : `stranger`;
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"

//Loop (Array)
console.log("----------");
console.log("Loop Array");
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

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i]} is my student.`);
}

