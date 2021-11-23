const fs = require("fs");

//
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

async function readData() {
//   let a = fs.readFile("./content1.txt", "utf-8", (err, result) => {
//     return result;
    //});

    let a = await readFile('./content1.txt', 'utf-8');
  

  console.log(a);
}

console.log(readData()); 
//readData();
