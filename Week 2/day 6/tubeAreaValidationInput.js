// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate tube volume
function tubeArea(radius, height, phi) {
  //Function dan 3 parameter
  return 2 * phi * radius * height; //pengembalian nilai dengan argumen
}

/* Alternative Way */
// All input just in one code
function inputTubeArea() {
  rl.question("Radius: ", function (radius) {
    rl.question("Phi: ", (phi) => {
      rl.question("Height: ", (height) => {
        if (radius > 0 && phi > 0 && height > 0) {
          console.log(`\nTubeArea: ${tubeArea(radius, height, phi)}`);
          rl.close();
        } else {
          console.log(`Radius, Phi and Height must be a number\n`);
          inputTubeArea();
        }
      });
    });
  });
}
/* End Alternative Way */

console.log(`TUBE AREA`);
console.log(`=========`);
inputTubeArea(); // Call Alternative function the Tube Area
