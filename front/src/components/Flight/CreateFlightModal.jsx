import axios from "axios";
import ReactDOM from "react-dom";
import React, { useState } from "react";

function CreateFlightModal({ close }) {
  const [newFlight, setNewFlight] = useState({
    airline: "",
    flight_number: "",
    departure_airport: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFlight({
      ...setNewFlight,
      [name]: value,
    });
    console.log(newFlight);
  };
  const handleAddFlight = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/flights/add",
        newFlight
      );
      console.log("New flight added:", data);
      setNewFlight({
        airline: "",
        flight_number: "",
        departure_airport: "",
      });
    } catch (error) {
      console.error("Error adding flight:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="flight-modal">
      <div className="create-box">
        <h3>Create new flight</h3>
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
          <button className="btn-create" onClick={handleAddFlight}>
            Create
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CreateFlightModal;
