// usersModel.js
const connection = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    const sql = 'SELECT * FROM `users`';
    connection.query(sql, function(error, results) {
      callback(error, results);
    });
  },

  getOneById: function(userId, callback) {
    const sql = 'SELECT * FROM `users` WHERE user_id = ?';
    connection.query(sql, [userId], function(error, results) {
      callback(error, results[0]);
    });
  },

  add: function(userData, callback) {
    const sql = 'INSERT INTO `users` SET ?';
    connection.query(sql, userData, function(error, results) {
      callback(error, results);
    });
  },

  update: function(userId, updateUser, callback) {
    const sql = 'UPDATE `users` SET username=?, email=?, password=? WHERE user_id=?';
    connection.query(sql, [updateUser.username, updateUser.email, updateUser.password, userId], function(error, results) {
      callback(error, results);
    });
  },

  delete: function(userId, callback) {
    const sql = 'DELETE FROM `users` WHERE user_id = ?';
    connection.query(sql, [userId], function(error, results) {
      callback(error, results);
    });
  }
};
