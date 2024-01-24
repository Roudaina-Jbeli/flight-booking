// usersController.js
const usersModel = require('../models/userModels')
module.exports = {
  getAllUsers: function(req, res) {
    usersModel.getAll(function(err, results) {
      if(err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneUser: function(req, res) {
    const userId = req.params.id;
    usersModel.getOneById(userId, function(err, result) {
      if(err) res.status(500).send(err);
      else if(!result) res.status(404).send('User not found');
      else res.json(result);
    });
  },

  addUser: function(req, res) {
    const userData = req.body;
    usersModel.add(userData, function(err, result) {
      if(err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateUser: function(req, res) {
    const userId = req.params.id;
    const updateUser = req.body;
    usersModel.update(userId, updateUser, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'User updated successfully' });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  },

  deleteUser: function(req, res) {
    const userId = req.params.id;
    usersModel.delete(userId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'User deleted successfully' });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      }
    });
  }
};
