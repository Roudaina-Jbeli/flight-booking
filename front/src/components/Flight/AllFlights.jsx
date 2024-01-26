import axios from "axios";
import React, { useEffect, useState } from "react";
import Flight from "./Flight.jsx"
import "./flight.css";
import "./flightModal.css";
import CreateFlightModal from "./CreateFlightModal";
function AllFlights() {
  const [modal, setModal] = useState(false);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/flights/getAll`)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {modal && <CreateFlightModal close={() => setModal(false)} />}
      <div className="title-container">
        <h1>All Flights</h1>
        <button className="btn-create" onClick={() => setModal(true)}>
          Create
        </button>
      </div>
      {flights.length === 0 ? (
        <div>no flights found</div>
      ) : (
        <div className="flights-container">
          {flights.map((flight) => (
            <Flight key={flight.id} flight={flight} />
          ))}
        </div>
      )}
    </>
  );
}

export default AllFlights;
