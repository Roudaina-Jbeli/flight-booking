import React, { useState } from "react";
import DeleteBookingModal from "./DeleteBookingModal";
import UpdateBookingModal from "./UpdateBookingModal";

function Booking({ booking }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div className="booking-card">
      {deleteModal && (
        <DeleteBookingModal close={() => setDeleteModal(false)} />
      )}
      {updateModal && (
        <UpdateBookingModal
          Booking={Booking}
          close={() => setUpdateModal(false)}
        />
      )}
      <div className="details">{booking?.booking_id}</div>
      <div className="details">{booking?.booking_id}</div>
      <div className="details">{booking?.flight_id}</div>
      <div className="details">{booking?.seat_number}</div>
      <div className="details">{booking?.booking_dateTime}</div>
      <div className="btn-container">
        <button
          className="btn-delete"
          id={booking.booking_id}
          onClick={() => setDeleteModal(true)}
        >
          Delete
        </button>
        <button
          className="btn-update"
          booking={booking}
          onClick={() => setUpdateModal(true)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Booking;
