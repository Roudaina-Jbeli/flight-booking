// flightsModel.js
const connection = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `flights`';
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneById: function(flightId, callback) {
    const sql = 'SELECT * FROM `flights` WHERE flight_id = ?';
    connection.query(sql, [flightId], function(error, results) {
      callback(error, results[0]);
    });
  },

  add: function(flightData, callback) {
    const sql = 'INSERT INTO `flights` SET ?';
    connection.query(sql, flightData, function(error, results) {
      callback(error, results);
    });
  },

  update: function(flightId, updateFlight, callback) {
    const sql = 'UPDATE `flights` SET airline=?, flight_number=?, departure_airport=?, destination_airport=?, departure_datetime=?, arrival_datetime=?, price=? WHERE flight_id=?';
    connection.query(sql, [updateFlight.airline, updateFlight.flight_number, updateFlight.departure_airport, updateFlight.destination_airport, updateFlight.departure_datetime, updateFlight.arrival_datetime, updateFlight.price, flightId], function(error, results) {
      callback(error, results);
    });
  },

  delete: function(flightId, callback) {
    const sql = 'DELETE FROM `flights` WHERE flight_id = ?';
    connection.query(sql, [flightId], function(error, results) {
      callback(error, results);
    });
  }
};
