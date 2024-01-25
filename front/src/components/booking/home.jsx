import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBook from './addbook';
import UpdateBook from './update';
import DeleteBook from './deletebook';
import { Button, Card, CardContent, Typography, Container, Grid, CircularProgress } from '@mui/material';

function Home() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    // Fetch data from your server or API endpoint using Axios
    axios.get('http://localhost:8080/booking/getAll')
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleAddClick = () => {
    setShowAddForm(true);
    setSelectedBookingId(null); // Reset selectedBookingId when showing the add form
  };

  const handleUpdateClick = (bookingId) => {
    setShowAddForm(false);
    setSelectedBookingId(bookingId);
  };

  const handleDeleteClick = (bookingId) => {
    setShowAddForm(false);
    setSelectedBookingId(bookingId);
  };

  const handleFormClose = () => {
    setShowAddForm(false);
    setSelectedBookingId(null);
  };

  const handleAddOrUpdate = () => {
    // Function to handle updates after adding or updating a booking
    // You can fetch the updated data or trigger a re-fetch here
    axios.get('http://localhost:8080/booking/getAll')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching updated data:', error);
      });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }} onClick={handleAddClick}>
        Add Booking
      </Button>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {showAddForm ? (
            <AddBook onClose={handleFormClose} onAddOrUpdate={handleAddOrUpdate} />
          ) : (
            bookings.map((ele, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {ele.seat_number}
                    </Typography>
                    <Typography color="text.secondary">
                      {ele.booking_datetime}
                    </Typography>
                    <Button color="info" onClick={() => handleUpdateClick(ele.booking_id)}>
                      Update
                    </Button>
                    <Button color="error" onClick={() => handleDeleteClick(ele.booking_id)}>
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}

      {selectedBookingId !== null && (
        <div style={{ marginTop: '20px' }}>
          <UpdateBook bookingId={selectedBookingId} onClose={handleFormClose} onUpdate={handleAddOrUpdate} />
          <DeleteBook bookingId={selectedBookingId} onClose={handleFormClose} onDelete={handleAddOrUpdate} />
        </div>
      )}
    </Container>
  );
}

export default Home;
