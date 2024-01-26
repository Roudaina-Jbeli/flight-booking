import React, { useState } from "react";
import DeleteUserModal from "./DeleteUserModal";
import UpdateUserModal from "./UpdateUserModal";

function User({ user }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div className="user-card">
      {deleteModal && <DeleteUserModal close={() => setDeleteModal(false)} />}
      {updateModal && (
        <UpdateUserModal user={user} close={() => setUpdateModal(false)} />
      )}
      <div className="details">{user.username}</div>
      <div className="details">{user.email}</div>
      <div className="details">{user.password}</div>
      <div className="details">{user.user_id}</div>
      <div className="btn-container">
        <button
          className="btn-delete"
          id={user.user_id}
          onClick={() => setDeleteModal(true)}
        >
          Delete
        </button>
        <button
          className="btn-update"
          user={user}
          onClick={() => setUpdateModal(true)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default User;
