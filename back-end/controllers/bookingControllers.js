// bookingsController.js
const bookingsModel = require('../models/bookingModels');

module.exports = {
  getAllBookings: function(req, res) {
    bookingsModel.getAll(function(err, results) {
      if(err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneBooking: function(req, res) {
    const bookingId = req.params.id;
    bookingsModel.getOneById(bookingId, function(err, result) {
      if(err) res.status(500).send(err);
      else if(!result) res.status(404).send('Booking not found');
      else res.json(result);
    });
  },

  addBooking: function(req, res) {
    const bookingData = req.body;
    bookingsModel.add(bookingData, function(err, result) {
      if(err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateBooking: function(req, res) {
    const bookingId = req.params.id;
    const updateBooking = req.body;
    bookingsModel.update(bookingId, updateBooking, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Booking updated successfully' });
        } else {
          res.status(404).json({ error: 'Booking not found' });
        }
      }
    });
  },

  deleteBooking: function(req, res) {
    const bookingId = req.params.id;
    bookingsModel.delete(bookingId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Booking deleted successfully' });
        } else {
          res.status(404).json({ error: 'Booking not found' });
        }
      }
    });
  }
};
