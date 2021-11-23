//emit dan on bisa dua arah antara client dan server
//package socket I/O
const eventEmitter = require('events');
//initialize an instance because events is a class

const my = new eventEmitter();

//listener
my.on('Some Event', function(name, age, address){
    //console.log("Some event happened!");
})

//Emit a listener
my.emit('Some Event');