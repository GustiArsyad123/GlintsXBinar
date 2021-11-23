const EvenEmitter = require('events')//import event
const readline = require('readline') //import readline

//make event instance
const my = new EvenEmitter()
    //make readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

});

//Listener
my.on('Login:failed', function(email){
    console.log(`${email} is failed to login!`);
    rl.close();
});

my.on('Login:success', function(email){
    console.log(`${email} is success to login!`);
    rl.close();
})

// function to login
function login(email,password){
    const passwordStoreInDatabase = '12345';
    if (password!== passwordStoreInDatabase) {
        my.emit('Login:Failed', email); //pass the email to listener
    } else {
        console.log('Logoin:success', email);
    }
}

//input email and password
rl.question('Email: ', function(email){
    rl.question('Password: ', function(password) {
        login(email, password); //run login function
    });
});