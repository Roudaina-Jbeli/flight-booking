// flightsRoutes.js
const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightControllers');

router.get('/getAll', flightsController.getAllFlights);
router.get('/:id', flightsController.getOneFlight);
router.post('/add', flightsController.addFlight);
router.put('/update/:id', flightsController.updateFlight);
router.delete('/delete/:id', flightsController.deleteFlight);

module.exports = router;
