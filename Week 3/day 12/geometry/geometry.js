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
        //way one
        return 'I am Geometry';
        //way two
        //console.log('I am Geometry');
    }
}

module.exports = Geometry;

//way 1
//let tes = new Geometry;
//console.log(tes.hello());

//way two
//let tes = new Geometry;
//tes.hello();
