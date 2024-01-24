const usersModel = require('../database/models/usersMode'); // Adjust the path accordingly

module.exports = {
    // Method to fetch all users from the flight_booking database.
    getAllUsers: function(req, res) {
        usersModel.getAllUsers((error, users) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json(users);
        });
    },
    // Method to create a new user.
    createUser: function(req, res) {
        const { username, email, password } = req.body;
        const newUser = { username, email, password };
        usersModel.createUser(newUser, (error, userId) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(201).json({ userId });
        });
    },
    // Method to get a user by user_id.
    getUserById: function(req, res) {
        const userId = req.params.userId;
        usersModel.getUserById(userId, (error, user) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        });
    },
    // Method to update a user by user_id.
    updateUserById: function(req, res) {
        const userId = req.params.userId;
        const { username, email, password } = req.body;
        const updatedUser = { username, email, password };
        usersModel.updateUserById(userId, updatedUser, (error, affectedRows) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User updated successfully' });
        });
    },
    // Method to delete a user by user_id.
    deleteUserById: function(req, res) {
        const userId = req.params.userId;
        usersModel.deleteUserById(userId, (error, affectedRows) => {
            if (error) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        });
    }
};
