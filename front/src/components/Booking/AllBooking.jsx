import axios from "axios";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import "./booking.css";
import "./bookingModal.css";
import CreateBookingModal from "./CreateBookingModal";
function AllBookings() {
  const [modal, setModal] = useState(false);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/bookings/getAll`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {modal && <CreateBookingModal close={() => setModal(false)} />}
      <div className="title-container">
        <h1>All Bookings</h1>
        <button className="btn-create" onClick={() => setModal(true)}>
          Create
        </button>
      </div>
      {bookings.length === 0 ? (
        <div>no Booking found</div>
      ) : (
        <div className="bookings-container">
          {bookings.map((booking) => (
            <Booking key={booking.booking_id} booking={booking} />
          ))}
        </div>
      )}
    </>
  );
}

export default AllBookings;
