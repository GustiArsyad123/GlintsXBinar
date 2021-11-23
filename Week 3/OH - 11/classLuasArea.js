class LuasArea{
    constructor(panjang, lebar){
        this.panjang = lebar
        this.lebar = lebar
    }

    get area(){
        return this.luasArea();
    }

    set(){

    }

    luasArea(){
        return this.panjang * this.lebar
    }

    // name(){
    //     return `my name is ${this.name}`
    // }

    // alamat(){

    // }
}

//method terdapat di dalam class
//function berdiri sendiri diluar class
//

//const fajar = new Manusia('Fajar') //instance 
//console.log(fajar.name);

//function fungsiBaru(){
//    return true;
//}

//const fungsi = fungsiBaru();
//console.log(fungsi);

const namaManusia = new Manusia('Fajar') //instance
console.log(namaManusia.name());


