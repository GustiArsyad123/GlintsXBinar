// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate tube volume
function tubeVolume(radius, height, phi) {
  //Function dan 3 parameter
  return phi * radius * radius * height; //pengembalian nilai dengan argumen
}

/* Alternative Way */
// All input just in one code
function inputTube() {
  rl.question("Radius: ", function (radius) {
    rl.question("Phi: ", (phi) => {
      rl.question("Height: ", (height) => {
        if (radius > 0 && phi > 0 && height > 0) {
          console.log(`\nTube: ${tubeVolume(radius, height, phi)}`);
          rl.close();
        } else {
          console.log(`Radius, Phi and Height must be a number\n`);
          inputTube();
        }
      });
    });
  });
}
/* End Alternative Way */

console.log(`Tube Volume`);
console.log(`=========`);
inputTube(); // Call Alternative function the Tube  Volume
