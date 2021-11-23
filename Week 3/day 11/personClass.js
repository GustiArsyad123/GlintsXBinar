const { PassThrough } = require("stream");

//Class
class Person {
    static isBreath = true;
    //constuctor is an identity of the class (instance property)
    constructor(name, address, age) { //sebuah parameter /attribut
        this.name = name;   //name property
        this.address = address;
        this.age = age;
    }

    //function, class can do something
    //Instance method
    greet(){
        return `${this.name}, ${this.age} years old, live in ${this.address}!`;
    }

    greetAndBye(){
        return `${this.greet()} And bye!`;
    }


    //Static method
    static run(){
       return `${this.name} is running`;
    }

    static jogging(){
        return this.run();
    }
    
}

//add instance method to Person
Person.prototype.kick =function(){
    return `${this.name} kick someone!`;
}

//add static method to Person
Person.punch = function(){
    return `${this.name} punch someone!`;
}

/*object*/
let dhea = new Person('Dhea', 'padang', 25);
let adi = new Person('adi', 'situbondo', 25);

console.log(dhea.greetAndBye());

//print
// console.log(dhea);
// console.log(dhea.run());
//console.log(adi.greet());
console.log(adi.kick());
//console.log(dhea.greet());
//console.log(Person.greet()); //it will error
console.log(adi.name); //this will be object that you can call it


/* Static */
console.log(Person.isBreath) //it will work
//console.log(dhea.isBreath); //it will undefined
//console.log(Person.run()); // it will work
//console.log(adi.run()); //it eill error
console.log(Person.punch()); 