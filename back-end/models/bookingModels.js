// bookingsModel.js
const connection = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `bookings`';
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneById: function(bookingId, callback) {
    const sql = 'SELECT * FROM `bookings` WHERE booking_id = ?';
    connection.query(sql, [bookingId], function(error, results) {
      callback(error, results[0]);
    });
  },

  add: function(bookingData, callback) {
    const sql = 'INSERT INTO `bookings` SET ?';
    connection.query(sql, bookingData, function(error, results) {
      callback(error, results);
    });
  },

  update: function(bookingId, updateBooking, callback) {
    const sql = 'UPDATE `bookings` SET user_id=?, flight_id=?, seat_number=?, booking_datetime=? WHERE booking_id=?';
    connection.query(sql, [updateBooking.user_id, updateBooking.flight_id, updateBooking.seat_number, updateBooking.booking_datetime, bookingId], function(error, results) {
      callback(error, results);
    });
  },

  delete: function(bookingId, callback) {
    const sql = 'DELETE FROM `bookings` WHERE booking_id = ?';
    connection.query(sql, [bookingId], function(error, results) {
      callback(error, results);
    });
  }
};
