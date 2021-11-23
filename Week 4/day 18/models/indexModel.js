const mysql = require('mysql2') //Import mysql package
const { promisify } = require('util'); //Import promisify

//Create mysql connection to connect of the myswl database
const connection = mysql.createConnection({
    host: 'localhost', //name host
    user: 'gusti', //name user
    password: '12345', //password user
    database: 'sales', //database name
});

//module.exports = connection;
module.exports = promisify(connection.query).bind(connection); // it will make query to be promise 