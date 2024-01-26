import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import "./user.css";
import "./userModal.css";
import CreateUserModal from "./CreateUserModal";
function AllUsers() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/getAll`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {modal && <CreateUserModal close={() => setModal(false)} />}
      <div className="title-container">
        <h1>All Users</h1>
        <button className="btn-create" onClick={() => setModal(true)}>
          Create
        </button>
      </div>
      {users.length === 0 ? (
        <div>no users found</div>
      ) : (
        <div className="users-container">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default AllUsers;
