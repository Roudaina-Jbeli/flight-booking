// DeleteUser.jsx

import React from 'react';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDeleteClick = async () => {
    try {
      console.log(`Deleting user with ID ${userId}`);
      await onDelete(userId);
      console.log(`User with ID ${userId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
    }
  };

  return (
    <button onClick={handleDeleteClick}>Delete</button>
  );
};

export default DeleteUser;
