import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your server or API endpoint using Axios
    axios.get(`http://localhost:8080/booking/getAll`)
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        bookings.map((ele, i) => (
          <div key={i}>
            <h1>{ele.seat_number}</h1>
            <h1>{ele.booking_datetime}</h1>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
