import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function UpdateBookingModal({ close, booking }) {
  const [newBooking, setNewBooking] = useState({
    seat_number: booking.seat_number,
    booking_datetime: booking.booking_datetime,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({
      ...newBooking,
      [name]: value,
    });
    console.log(newBooking);
  };
  const handleUpdateBooking = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/bookings/update/${booking.id}`,
        newBooking
      );
      console.log("New book added:", data);
      setNewBooking({
        seat_number: "",
        booking_datetime: "",
      });
      close();
    } catch (error) {
      console.error("Error adding booking:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="booking-modal">
      <div className="create-box">
        <h3>Update booking</h3>
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
          <button className="btn-update" onClick={handleUpdateBooking}>
            Update
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default UpdateBookingModal;
