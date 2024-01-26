import axios from "axios";
import ReactDOM from "react-dom";
import React, { useState } from "react";

function CreateUserModal({ close }) {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
    console.log(newUser);
  };
  const handleAddUser = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/users/add",
        newUser
      );
      console.log("New user added:", data);
      setNewUser({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="user-modal">
      <div className="create-box">
        <h3>Create new user</h3>
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
          <button className="btn-create" onClick={handleAddUser}>
            Create
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default CreateUserModal;
