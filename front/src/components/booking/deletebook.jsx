import React from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function DeleteBook({ bookingId, onClose, onDelete }) {
  const handleDeleteBook = () => {
    axios.delete(`http://localhost:8080/booking/delete/${bookingId}`)
      .then(response => {
        onDelete(); // Notify the parent component about the deletion
        onClose(); // Close the form
      })
      .catch(error => {
        console.error('Error deleting booking:', error);
      });
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Delete Booking</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this booking?
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleDeleteBook}>
          Delete Booking
        </Button>
        <Button onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteBook;
