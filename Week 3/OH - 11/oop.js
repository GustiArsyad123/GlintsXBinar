/** 
 * OOP -- Object Oriented Programming
 * 
 * CLASS :
 * - Inheritance
 * - Polymorphisme
 * - Encapsulation
 * - Abstraction
 * 
*/

class Car {
  constructor(nama, warna) {
    this._nama = nama
    this._color = warna
  }

  get color () {
    return `Warna Mobilnya adalah ${this._color}`
  }

  set color (color) {
    this._color = `${color} keren`
  }

  get namaku() {
    return `namaku adalah ${this._nama}`
  }

  get warnaAsliMobilku() {
    return `warna mobilkuuuuuuu adalah ${this._color}`
  }

  static engine() {
    return `aku memiliki engine`
  }
}

const mobil = new Car('najib', 'violet') // --> instance

mobil.color = 'hijau'

console.log(mobil.namaku);
console.log(mobil.engine());  // --> jika TIDAK static
console.log(Car.engine());  // --> jika static


// Inheritance -- extending
class RodaEmpat extends Car {
  constructor(roda) {
    super()
    this._roda = roda
  }

  get rodaKendaraan() {
    return `kijang memiliki roda ${this._roda}`
  }
}


const toyota = new RodaEmpat(4) // --> instance

toyota.color = 'metalic'
console.log(toyota.color)
console.log(toyota.rodaKendaraan)


// Polymorphisme  -- overwriting
class RodaEnam extends Car {
  constructor() {
    super()
  }

  get warnaAsliMobilku() {
    return `warna loriku adalah ${this._color}`
  }
}

const lori = new RodaEnam()
lori.color = 'putih'
console.log(lori.warnaAsliMobilku)
