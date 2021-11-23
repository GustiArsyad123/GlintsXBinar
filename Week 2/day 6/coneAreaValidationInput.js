// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate Cone Area
function coneArea(radius, z, phi) {
  //z = Panjang Garis Pelukis
  return phi * radius * (radius + z);
}

/* Alternative Way */
// All input just in one code
function inputConeArea() {
  rl.question("Radius: ", function (radius) {
    rl.question("Phi: ", (phi) => {
      rl.question("Z: ", (z) => {
        if (radius > 0 && phi > 0 && z > 0) {
          console.log(`\nConeArea: ${coneArea(radius, z, phi)}`);
          rl.close();
        } else {
          console.log(`Radius, Phi and Z must be a number\n`);
          inputConeArea();
        }
      });
    });
  });
}
/* End Alternative Way */

console.log(`CONE AREA`);
console.log(`=========`);
inputConeArea(); // Call Alternative function the Cone  Area
