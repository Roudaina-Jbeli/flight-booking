import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function UpdateFlightModal({ close, flight }) {
  const [newFlight, setNewFlight] = useState({
    airline: flight.airline,
    flight_number: flight.flight_number,
    departure_airport: flight.departure_airport,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlight({
      ...newFlight,
      [name]: value,
    });
    console.log(newFlight);
  };
  const handleUpdateFlight = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/flights/update/${flight.id}`,
        newFlight
      );
      console.log("New flight added:", data);
      setNewFlight({
        airline: "",
        flight_number: "",
        departure_airport: "",
      });
      close();
    } catch (error) {
      console.error("Error adding flight:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="flight-modal">
      <div className="create-box">
        <h3>Update flight</h3>
        <label>
          <span>airline:</span>
          <input
            type="text"
            name="airline"
            value={newFlight.airline}
            onChange={handleInputChange}
          />
        </label>
        <label>
          flight_number:
          <input
            type="text"
            name="flight_number"
            value={newFlight.flight_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          departure_airport:
          <input
            type="departure_airport"
            name="departure_airport"
            value={newFlight.departure_airport}
            onChange={handleInputChange}
          />
        </label>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-update" onClick={handleUpdateFlight}>
            Update
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default UpdateFlightModal;
