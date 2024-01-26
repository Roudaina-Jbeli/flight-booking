import axios from "axios";
import ReactDOM from "react-dom";
import React from "react";

function DeleteUserModal({ close,id }) {
  
  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/delete/${id}`);
      
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return ReactDOM.createPortal(
    <div className="user-modal">
      <div className="create-box">
        <h3>Do you want to delete this user?!</h3>
        <div className="btn-container">
          <button className="btn-delete" onClick={close}>
            Close
          </button>
          <button className="btn-delete" onClick={handleDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default DeleteUserModal;
