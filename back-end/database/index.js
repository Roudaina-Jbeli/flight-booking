const mysql = require('mysql2');

// Create a connection pool
const connection = mysql.connect({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'flight_booking',
});

// Get a connection from the pool

module.exports = connection;
