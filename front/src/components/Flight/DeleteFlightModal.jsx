import axios from "axios";
import ReactDOM from "react-dom";
import React from "react";

function DeleteFlightModal({ close,id }) {
  
  const handleDeleteFlight = async () => {
    try {
      await axios.delete(`http://localhost:8080/flights/delete/${id}`);
      
    } catch (error) {
      console.error("Error adding flight:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="flight-modal">
      <div className="create-box">
        <h3>Do you want to delete this flight?!</h3>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-delete" onClick={handleDeleteFlight}>
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteFlightModal;
