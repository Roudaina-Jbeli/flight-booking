// bookingsRoutes.js
const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingControllers'); ///

router.get('/getAll', bookingsController.getAllBookings);
router.get('/:id', bookingsController.getOneBooking);
router.post('/add', bookingsController.addBooking);
router.put('/update/:id', bookingsController.updateBooking);
router.delete('/delete/:id', bookingsController.deleteBooking);

module.exports = router;
