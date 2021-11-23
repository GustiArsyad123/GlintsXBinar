const data = require("./arrayFactory");
const test = require("./test");

/*
 * Code Here!
 * */

// Optional
function clean(data) {
  return data.filter((i) => typeof i === "number");
}

// Should return array
function sortAscending(data) {
  // Code Here
    const dataClean = clean(data)

    for (let i = 1; i < dataClean.length; i++){
        for (let k = 0; k < dataClean.length; k++) {
            if (dataClean[i] < dataClean[k]){
                //next code
                let a = dataClean[i]
                dataClean[i] = dataClean[k]
                dataClean[k] = a
            }
        }
    }
  return dataClean;
}

// Should return array
function sortDecending(data) {
  // Code Here
  const dataClean = clean(data)
  for (let i = data.length - 1; i >= 0; i--){
    for (let k = data.length + 1; k >= 0; k--) {
        if (dataClean[i] < dataClean[k]){
            //next code
            let a = dataClean[k]
            dataClean[k] = dataClean[i]
            dataClean[i] = a
        }
    }
}

  return dataClean;
}

// DON'T CHANGE
test(sortAscending, sortDecending, data);
