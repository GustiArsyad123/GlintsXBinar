class Manusia{
    constructor(nama){
        this.nama = nama
    }

    name(){
        return `my name is ${this.nama}`;
    }

    //method
    get(){ //mengambil nilai pada this

    }

    set(){

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


