// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate Cone volume
function coneVolume(radius, height, phi) {
  //Function dan 3 parameter
  return (1.0 / 3.0) * (phi * radius * radius) * height; //pengembalian nilai dengan argumen
}

/* Alternative Way */
// All input just in one code
function inputConeVol() {
  rl.question("Radius: ", function (radius) {
    rl.question("Phi: ", (phi) => {
      rl.question("Height: ", (height) => {
        if (radius > 0 && phi > 0 && height > 0) {
          console.log(`\nConeVol: ${coneVolume(radius, height, phi)}`);
          rl.close();
        } else {
          console.log(`Radius, Phi and Height must be a number\n`);
          inputConeVol();
        }
      });
    });
  });
}
/* End Alternative Way */

console.log(`CONE VOLUME`);
console.log(`=========`);
inputConeVol(); // Call Alternative function the Cone Volume
