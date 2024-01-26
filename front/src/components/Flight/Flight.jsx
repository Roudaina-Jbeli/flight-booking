import React, { useState } from "react";
import DeleteFlightModal from "./DeleteFlightModal";
import UpdateFlightModal from "./UpdateFlightModal";

function Flight({ flight }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div className="flight-card">
      {deleteModal && <DeleteFlightModal close={() => setDeleteModal(false)} />}
      {updateModal && (
        <UpdateFlightModal flight={flight} close={() => setUpdateModal(false)} />
      )}
      <div className="details">{flight.airline}</div>
      <div className="details">{flight.flight_number}</div>
      <div className="details">{flight.departure_airport}</div>
      <div className="btn-container">
        <button
          className="btn-delete"
          id={flight.id}
          onClick={() => setDeleteModal(true)}
        >
          Delete
        </button>
        <button
          className="btn-update"
          flight={flight}
          onClick={() => setUpdateModal(true)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Flight;
