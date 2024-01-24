const connection = require('../index');

// Create a new user
const createUser = (user, callback) => {
    const { username, email, password } = user;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.insertId);
    });
};

// Get all users
const getAllUsers = (callback) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results);
    });
};

// Get a user by user_id
const getUserById = (userId, callback) => {
    const query = 'SELECT * FROM users WHERE user_id = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results[0]); // Assuming user_id is unique, so only one result should be returned
    });
};

// Update a user by user_id
const updateUserById = (userId, updatedUser, callback) => {
    const { username, email, password } = updatedUser;
    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE user_id = ?';
    connection.query(query, [username, email, password, userId], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.affectedRows);
    });
};

// Delete a user by user_id
const deleteUserById = (userId, callback) => {
    const query = 'DELETE FROM users WHERE user_id = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        callback(null, results.affectedRows);
    });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};
