// Homeusers.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteUser from './deleteusers';

function Homeusers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your server or API endpoint using Axios
    axios.get(`http://localhost:8080/users/getAll`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {

   
    console.log('.....ID....', id);
    if (id) {
      try {
        const { data } = await axios.delete(`http://localhost:8080/users/delete/${id}`).then(() => {
          console.log('aaa');
          window.location.reload();
        });
        console.log('.....data....', data);
      } catch ({ response }) {
        if (response?.status === 400) {
          console.log('....something went wrong, please try again');
        } else {
          console.log('error:', response?.error);
        }
      }
    }
   }

  

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((e, i) => (
          <div key={i}>
            
            <h1>{e.username}</h1>
            <h1>{e.email}</h1>
            <h1>{e.password}</h1>
            <h1>{e.user_id}</h1>
            <DeleteUser classname="hiba" userId={e.user_id} onDelete={() => handleDelete(e.user_id)} />
          </div>
        ))
      )}
    </div>
  );
}

export default Homeusers;
