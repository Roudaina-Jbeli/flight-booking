// home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBook from './addbook.jsx';
import UpdateBook from './update.jsx';
import DeleteBook from './deletebook.jsx';
import { Button, Card, CardContent, Typography } from '@mui/material';

function Home() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8080/booking/getAll')
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleAddClick = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
  };

  const handleUpdateClick = (bookingId) => {
    setShowAddForm(false);
    setShowUpdateForm(true);
    setShowDeleteForm(false);
    setSelectedBookingId(bookingId);
  };

  const handleDeleteClick = (bookingId) => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(true);
    setSelectedBookingId(bookingId);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setShowDeleteForm(false);
    setSelectedBookingId(null);
  };

  const handleAdd = () => {
    // Implement your logic for adding a new booking
    axios.post('http://localhost:8080/booking/add', {
      // Your data for adding a new booking
    })
    .then(response => {
      console.log('Booking added successfully');
      fetchData();
    })
    .catch(error => {
      console.error('Error adding booking:', error);
    });
    handleFormClose();
  };

  const handleUpdate = () => {
    // The actual update logic is handled inside the UpdateBook component
    // The handleUpdateBook function in UpdateBook.jsx performs the update and closes the form
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/booking/delete/${selectedBookingId}`);
      console.log('Booking deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
    handleFormClose();
  };

  return (
    <div>
      <Button onClick={handleAddClick}>Add Booking</Button>
      <div className="container">
        {bookings.map(booking => (
          <Card key={booking.booking_id} className="card">
            <CardContent>
              <Typography variant="h5" component="div">
                {booking.seat_number}
              </Typography>
              <Typography color="text.secondary">
                {booking.booking_datetime}
              </Typography>
              <Button onClick={() => handleUpdateClick(booking.booking_id)}>Update</Button>
              <Button onClick={() => handleDeleteClick(booking.booking_id)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {showAddForm && (
        <AddBook
          onClose={handleFormClose}
          onAdd={handleAdd}
        />
      )}
      {showUpdateForm && (
        <UpdateBook
          bookingId={selectedBookingId}
          onClose={handleFormClose}
          onUpdate={fetchData} // Pass the fetchData function to UpdateBook for handling update
        />
      )}
      {showDeleteForm && (
        <DeleteBook
          bookingId={selectedBookingId}
          onClose={handleFormClose}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default Home;
