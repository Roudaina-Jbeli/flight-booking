import axios from "axios";
import ReactDOM from "react-dom";
import React from "react";

function DeleteBookingModal({ close,id }) {
  
  const handleDeleteBooking = async () => {
    try {
      await axios.delete(`http://localhost:8080/bookings/delete/${id}`);
      
    } catch (error) {
      console.error("Error adding booking:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="booking-modal">
      <div className="create-box">
        <h3>Do you want to delete this booking?!</h3>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-delete" onClick={handleDeleteBooking}>
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteBookingModal;
