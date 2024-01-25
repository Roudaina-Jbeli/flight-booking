// AddBook.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function AddBook({ onClose, onAdd }) {
  const [seatNumber, setSeatNumber] = useState('');
  const [bookingDatetime, setBookingDatetime] = useState('');

  const handleAddBook = () => {
    axios.post('http://localhost:8080/booking/add', {
      seat_number: seatNumber,
      booking_datetime: bookingDatetime,
      // Add other fields as needed
    })
    .then(response => {
      onAdd(); // Notify parent component about the addition
      onClose(); // Close the form
    })
    .catch(error => {
      console.error('Error adding booking:', error);
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
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleAddBook}>
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
