// AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

function AddUsers({ onAddUser }) {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleAddUser = async () => {
    try {
      const { data } = await axios.post('http://localhost:8080/users/add', newUser);
      console.log('New user added:', data);
      onAddUser(); // Notify the parent component that a new user has been added
      setNewUser({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <label>
        Username:
        <input type="text" name="username" value={newUser.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={newUser.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
      </label>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default AddUsers;
