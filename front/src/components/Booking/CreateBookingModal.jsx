import axios from "axios";
import ReactDOM from "react-dom";
import React, { useState } from "react";

function CreateBookingModal({ close }) {
  const [newBooking, setNewBooking] = useState({
    seat_number: "",
    booking_datetime: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({
      ...newBooking,
      [name]: value,
    });
    console.log(newBooking);
  };
  const handleAddBooking = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/bookings/add",
        newBooking
      );
      console.log("New book added:", data);
      setNewBooking({
        seat_number: "",
        booking_datetime: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="book-modal">
      <div className="create-box">
        <h3>Create new book</h3>
        <label>
          <span>seat_number:</span>
          <input
            type="text"
            name="seat_number"
            value={newBooking.seat_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          booking_datetime:
          <input
            type="text"
            name="booking_datetime"
            value={newBooking.booking_datetime}
            onChange={handleInputChange}
          />
        </label>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-create" onClick={handleAddBooking}>
            Create
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CreateBookingModal;
