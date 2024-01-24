const mysql = require('mysql2');
// Create a database connection and export it from this file.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //username imported from the config files
    password: 'root', //password imported from the config files
    database: 'flight_booking' //database name imported from the config files
  });

console.log("jebna data");

module.exports = connection