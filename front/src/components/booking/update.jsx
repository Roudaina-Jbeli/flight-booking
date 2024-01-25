import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function UpdateBook({ bookingId, onClose, onUpdate }) {
  const [seatNumber, setSeatNumber] = useState('');
  const [bookingDatetime, setBookingDatetime] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/booking/get/${bookingId}`)
      .then(response => {
        const { seat_number, booking_datetime } = response.data;
        setSeatNumber(seat_number);
        setBookingDatetime(booking_datetime);
      })
      .catch(error => {
        console.error('Error fetching booking data:', error);
      });
  }, [bookingId]);

  const handleUpdateBook = () => {
    axios.put(`http://localhost:8080/booking/update/${bookingId}`, {
      seat_number: seatNumber,
      booking_datetime: bookingDatetime,
    })
    .then(response => {
      onUpdate(); // Notify parent component about the update
      onClose(); // Close the form
    })
    .catch(error => {
      console.error('Error updating booking:', error);
    });
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Update Booking</DialogTitle>
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
        <Button variant="contained" color="primary" onClick={handleUpdateBook}>
          Update Booking
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateBook;
