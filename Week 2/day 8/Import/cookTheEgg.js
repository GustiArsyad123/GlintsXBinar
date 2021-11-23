//const { strictEqual } = require("assert");

const fridge = ["apple", "orange", "banana", "meat", "Egg"];

function goToKitchen() {
  console.log("go to kitchen");
}

function checkEggAvaliablity() {
  if (fridge.include("Egg")) {
    return true;
  }
  return false;
}

function goToMarket() {
  console.log("go to market");
  console.log("buy the egg");
  console.log("go to back home");
}

function cookTheEgg() {
  console.log("prepare the fryer");
  console.log("pour the oil");
  console.log("lit up the stove");
  console.log("cook the egg");
}

function eggIsReady() {
  console.log("the egg is ready");
}

function start() {
  goToKitchen();
  !checkEggAvaliablity;
}

console.log(start());
