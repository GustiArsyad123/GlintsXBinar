class Geometry {
    constructor(name, type){
        this.name  = name;
        this.type = type;

        //  //make abstract
        //  if (this.constructor = TwoDimension) {
        //     throw new Error('Cannot instantiate from Abstract Class'); //bacause it's abstract
        // }
    }
    

    hello(){
        console.log('I am Geometry');
    }
}

module.exports = Geometry;

// let tes = new Geometry;
// console.log(tes);