import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function UpdateUserModal({ close, user }) {
  const [newUser, setNewUser] = useState({
    username: user.username,
    email: user.email,
    password: user.password,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
    console.log(newUser);
  };
  const handleUpdateUser = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/users/update/${user.id}`,
        newUser
      );
      console.log("New user updated:", data);
      setNewUser({
        username: "",
        email: "",
        password: "",
      });
      close();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="user-modal">
      <div className="create-box">
        <h3>Update user</h3>
        <label>
          <span>Username:</span>
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </label>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-update" onClick={handleUpdateUser}>
            Update
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default UpdateUserModal;
