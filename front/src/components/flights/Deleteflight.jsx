import React from 'react';
import axios from 'axios';

const DeleteFlight = ({ flightId, onDelete }) => {
  const handleDeleteClick = async () => {
    try {
      console.log(`Deleting flight with ID ${flightId}`);
      await axios.delete(`http://localhost:8080/flights/delete/${flightId}`);
      console.log(`Flight with ID ${flightId} deleted successfully.`);
      onDelete(flightId); // Notify the parent component that a flight has been deleted
    } catch (error) {
      console.error(`Error deleting flight with ID ${flightId}:`, error);
    }
  };

  return (
    <button className='hibaa' onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

export default DeleteFlight;
