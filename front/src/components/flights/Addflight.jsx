// AddFlight.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AddFlight({ onAddFlight }) {
  const [newFlight, setNewFlight] = useState({
    airline: '',
    flight_number: '',
    departure_airport: '',
    destination_airport: '',
    departure_datetime: '',
    arrival_datetime: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlight({
      ...newFlight,
      [name]: value
    });
  };

  const handleAddFlight = async () => {
    try {
      await axios.post('http://localhost:8080/flights/add', newFlight);
      console.log('New flight added successfully');
      onAddFlight(); // Notify the parent component that a new flight has been added
      setNewFlight({
        airline: '',
        flight_number: '',
        departure_airport: '',
        destination_airport: '',
        departure_datetime: '',
        arrival_datetime: '',
        price: ''
      });
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div>
      <h2>Add New Flight</h2>
      <label>
        Airline:
        <input type="text" name="airline" value={newFlight.airline} onChange={handleInputChange} />
      </label>
      <label>
        Flight Number:
        <input type="text" name="flight_number" value={newFlight.flight_number} onChange={handleInputChange} />
      </label>
      <label>
        Departure Airport:
        <input type="text" name="departure_airport" value={newFlight.departure_airport} onChange={handleInputChange} />
      </label>
      <label>
        Destination Airport:
        <input type="text" name="destination_airport" value={newFlight.destination_airport} onChange={handleInputChange} />
      </label>
      <label>
        Departure Datetime:
        <input type="datetime-local" name="departure_datetime" value={newFlight.departure_datetime} onChange={handleInputChange} />
      </label>
      <label>
        Arrival Datetime:
        <input type="datetime-local" name="arrival_datetime" value={newFlight.arrival_datetime} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="text" name="price" value={newFlight.price} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddFlight}>Add Flight</button>
    </div>
  );
}

export default AddFlight;
