// usersRoutes.js
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers.js');

router.get('/getAll', usersController.getAllUsers);
router.get('/:id', usersController.getOneUser);
router.post('/add', usersController.addUser);
router.put('/update/:id', usersController.updateUser);
router.delete('/delete/:id', usersController.deleteUser);

module.exports = router;
