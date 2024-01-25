// Flighthome.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteFlight from './Deleteflight';
import UpdateFlight from './updateflight';
import AddFlight from './Addflight'; // Import the new AddFlight component

function Flighthome() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFlightId, setSelectedFlightId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8080/flights/getAll')
      .then((response) => {
        setFlights(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleDelete = async (flightId) => {
    console.log('.....ID....', flightId);
    if (flightId) {
      try {
        await axios.delete(`http://localhost:8080/flights/delete/${flightId}`);
        // Remove the deleted flight from the state
        setFlights((prevFlights) => prevFlights.filter((flight) => flight.flight_id !== flightId));
        console.log('Flight deleted successfully.');
      } catch (error) {
        console.error('Error deleting flight:', error);
      }
    }
  };

  const handleUpdate = (flightId) => {
    setSelectedFlightId(flightId);
  };

  const handleUpdateFlight = () => {
    // Handle flight update logic here
    fetchData(); // Refresh the flight list after updating
    setSelectedFlightId(null); // Reset selected flight ID after updating
  };

  const handleAddFlight = async (newFlight) => {
    try {
      const { data } = await axios.post('http://localhost:8080/flights/add', newFlight);
      // Update the state with the newly added flight
      setFlights((prevFlights) => [...prevFlights, data]);
      console.log('New flight added:', data);
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      <AddFlight onAddFlight={handleAddFlight} />
      {flights.map((flight) => (
        <div key={flight.flight_id}>
          <div>{flight.flight_id}</div>
          <h1>{flight.airline}</h1>
          <h2>{flight.flight_number}</h2>
          <h3>{flight.departure_airport}</h3>
          <h4>{flight.destination_airport}</h4>
          <h5>{flight.departure_datetime}</h5>
          <h6>{flight.arrival_datetime}</h6>
          <h1>{flight.price}</h1>
          <DeleteFlight flightId={flight.flight_id} onDelete={handleDelete} />
          <button onClick={() => handleUpdate(flight.flight_id)}>Update Flight</button>
          {selectedFlightId === flight.flight_id && (
            <UpdateFlight flightId={flight.flight_id} onUpdateFlight={handleUpdateFlight} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Flighthome;
