const mysql = require('mysql2'); // Import mysql package
const { promisify } = require('util'); // Import promisify

// Make mysql connection to connect the mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'gusti',
  password: '12345',
  database: 'sales',
});

exports.query = promisify(connection.query).bind(connection); // It will make query to be promise
