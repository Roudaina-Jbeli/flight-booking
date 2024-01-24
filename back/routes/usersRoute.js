const express = require('express');
const router = express();
const usersController = require('../controllers/users');

/// USERS ROUTES ///

// GET request to fetch all users.
router.get('/getAll', usersController.getAllUsers);

// POST request to create a new user.
router.post('/create', usersController.createUser);

// GET request to get a user by user_id.
router.get('/:userId', usersController.getUserById);

// PUT request to update a user by user_id.
router.put('/:userId/update', usersController.updateUserById);

// DELETE request to delete a user by user_id.
router.delete('/:userId/delete', usersController.deleteUserById);

module.exports = router;
