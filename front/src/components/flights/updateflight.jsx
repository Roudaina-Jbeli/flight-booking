// UpdateFlight.js
import React, { useState } from 'react';
import axios from 'axios';

function UpdateFlight({ flightId, onUpdateFlight }) {
  const [updatedFlight, setUpdatedFlight] = useState({
    airline: '',
    flight_number: '',
    departure_airport: '',
    destination_airport: '',
    departure_datetime: '',
    arrival_datetime: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFlight({
      ...updatedFlight,
      [name]: value,
    });
  };

  const handleUpdateFlight = async () => {
    try {
      await axios.put(`http://localhost:8080/flights/update/${flightId}`, updatedFlight);
      console.log('Flight updated successfully');
      onUpdateFlight(); // Notify the parent component that a flight has been updated
    } catch (error) {
      console.error('Error updating flight:', error);
    }
  };

  return (
    <div>
      <h2>Update Flight</h2>
      <label>
        Airline:
        <input type="text" name="airline" value={updatedFlight.airline} onChange={handleInputChange} />
      </label>
      <label>
        Flight Number:
        <input type="text" name="flight_number" value={updatedFlight.flight_number} onChange={handleInputChange} />
      </label>
      <label>
        Departure Airport:
        <input type="text" name="departure_airport" value={updatedFlight.departure_airport} onChange={handleInputChange} />
      </label>
      <label>
        Destination Airport:
        <input type="text" name="destination_airport" value={updatedFlight.destination_airport} onChange={handleInputChange} />
      </label>
      <label>
        Departure Datetime:
        <input type="text" name="departure_datetime" value={updatedFlight.departure_datetime} onChange={handleInputChange} />
      </label>
      <label>
        Arrival Datetime:
        <input type="text" name="arrival_datetime" value={updatedFlight.arrival_datetime} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={updatedFlight.price} onChange={handleInputChange} />
      </label>
      <button onClick={handleUpdateFlight}>Update Flight</button>
    </div>
  );
}

export default UpdateFlight;
