class Car{
    constructor(_nama){
        this._color = null
        this._nama = _nama // _ underscore untuk bisa dipakai didalam dirinya
    }

    get color(){
        return `Warna Monilnya adalah ${this._color}`
    }

    set color(color){
        this._color = `${color} keren`
    }

    namaku(){
        return `namaku adalah ${this._nama}`
    }

    
}

const car = new Car();
const fajar = new Car('Fajar') //instance

car.color = 'merah'
car.color = 'hijau'

console.log(car.color)
console.log(fajar.namaku()) //jarang dipakai karena mengubah fungsi

//Inheritance == pewarisan
//Car parent dan RodaEmpat anaknya
class RodaEmpat extends Car {
    constructor(){
        super() //semua constractor akan include ex: _color and _nama
    }
   
}
 
const kijang = new RodaEmpat() // Instance
kijang._color = 'black'
console.log(kijang._color)

//Polymorphisme
class RodaEnam extends Car{
    constructor(){
        super()
    }

    get warnaAsliMobilku(){
        return `warna loriku adalah ${this}`
    }
}

