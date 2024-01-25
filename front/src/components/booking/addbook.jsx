// AddBooking.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function AddBook({ onClose, onAdd }) {
  const [seatNumber, setSeatNumber] = useState('');
  const [bookingDatetime, setBookingDatetime] = useState('');
  const [error, setError] = useState(null);

  const handleAddBook = () => {
    axios.post('http://localhost:8080/booking/add', {
      seat_number: seatNumber,
      booking_datetime: bookingDatetime,
    })
    .then(response => {
      // Assuming the response contains the new booking data
      onAdd(response.data);
      onClose();
    })
    .catch(error => {
      console.error('Error adding booking:', error);
      setError('An error occurred while adding the booking. Please try again.');
    });
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Add Booking</DialogTitle>
      <DialogContent>
        <TextField
          label="Seat Number"
          variant="outlined"
          fullWidth
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
        />
        <TextField
          label="Booking Datetime"
          variant="outlined"
          fullWidth
          value={bookingDatetime}
          onChange={(e) => setBookingDatetime(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </DialogContent>
      <DialogActions>
        <Button  variant="contained" color="primary" onClick={handleAddBook}>
          Add Booking
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddBook;
