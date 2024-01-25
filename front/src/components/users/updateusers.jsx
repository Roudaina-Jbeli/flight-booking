// UpdateUser.js
import React, { useState } from 'react';
import axios from 'axios';

function UpdateUser({ userId, onUpdateUser }) {
  const [updatedUser, setUpdatedUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value
    });
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(`http://localhost:8080/users/update/${userId}`, updatedUser);
      console.log('User updated successfully');
      onUpdateUser(); // Notify the parent component that a user has been updated
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <label>
        New Username:
        <input type="text" name="username" value={updatedUser.username} onChange={handleInputChange} />
      </label>
      <label>
        New Email:
        <input type="text" name="email" value={updatedUser.email} onChange={handleInputChange} />
      </label>
      <label>
        New Password:
        <input type="password" name="password" value={updatedUser.password} onChange={handleInputChange} />
      </label>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
}

export default UpdateUser;
