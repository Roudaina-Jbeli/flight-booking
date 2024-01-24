// flightsController.js
const flightsModel = require('../models/flightModels');

module.exports = {
  getAllFlights: function(req, res) {
    flightsModel.getAll(function(err, results) {
      if(err) res.status(500).send(err);
      else res.json(results);
    });
  },

  getOneFlight: function(req, res) {
    const flightId = req.params.id;
    flightsModel.getOneById(flightId, function(err, result) {
      if(err) res.status(500).send(err);
      else if(!result) res.status(404).send('Flight not found');
      else res.json(result);
    });
  },

  addFlight: function(req, res) {
    const flightData = req.body;
    flightsModel.add(flightData, function(err, result) {
      if(err) res.status(500).send(err);
      else res.status(201).json(result);
    });
  },

  updateFlight: function(req, res) {
    const flightId = req.params.id;
    const updateFlight = req.body;
    flightsModel.update(flightId, updateFlight, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Flight updated successfully' });
        } else {
          res.status(404).json({ error: 'Flight not found' });
        }
      }
    });
  },

  deleteFlight: function(req, res) {
    const flightId = req.params.id;
    flightsModel.delete(flightId, function(err, results) {
      if (err) res.status(500).json({ error: 'Internal Server Error' });
      else {
        if (results.affectedRows > 0) {
          res.status(200).json({ message: 'Flight deleted successfully' });
        } else {
          res.status(404).json({ error: 'Flight not found' });
        }
      }
    });
  }
};
