const EvenEmitter = require('events')//import event
const readline = require('readline') //import readline

//make the event instance
const myEvent = new EvenEmitter()
    //make readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

});

//Listener
myEvent.on('Login:failed', function(email){
    console.log(`${email} is failed to login!`);
    rl.close();
});

myEvent.on('Login:success', function(email){
    console.log(`${email} is success to login!`);
    rl.close();
})

// function to login
function login(email,password){
    const passwordStoreInDatabase = '123tes';
    if (password!== passwordStoreInDatabase) {
        myEvent.emit('Login:Failed', email); //pass the email to listener
        console.log(`${email}, password failed, so please try again!!!`)
        rl.close();
    } else {
        console.log('Logoin:success', email);
        rl.close();
    }
}

//input email and password
rl.question('Email: ', function(email){
    rl.question('Password: ', function(password) {
        login(email, password); //run login function
    });
});