// Homeusers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteUser from './deleteusers';
import AddUser from './addusers';
import UpdateUser from './updateusers';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

function Homeusers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');

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
        await axios.delete(`http://localhost:8080/users/delete/${id}`);
        console.log('aaa');
        window.location.reload();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  }

  const handleAddUser = () => {
    // Refresh the user list after adding a new user
    window.location.reload();
  };

  const handleUpdateUser = () => {
    // Refresh the user list after updating a user
    setSelectedUserId(null);
    window.location.reload();
  };

  const handleSearch = () => {
    const results = users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.password.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Navbar onNavigate={handleNavigate} />
      <div className="search-bar-container">
        <SearchBar onSearch={() => handleSearch()} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button className="search-btn" onClick={() => handleSearch()}>
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {currentPage === 'home' && (
            <>
              <AddUser onAddUser={handleAddUser} />
              {searchResults.length > 0 ? (
                searchResults.map((e, i) => (
                  <div key={i} className="user-container">
                    <h1>{e.username}</h1>
                    <h1>{e.email}</h1>
                    <h1>{e.password}</h1>
                    <h1>{e.user_id}</h1>
                    <button onClick={() => setSelectedUserId(e.user_id)}>Update User</button>
                    {selectedUserId === e.user_id && (
                      <UpdateUser key={i} userId={e.user_id} onUpdateUser={handleUpdateUser} />
                    )}
                    <DeleteUser key={i} classname="hiba" userId={e.user_id} onDelete={handleDelete} />
                  </div>
                ))
              ) : (
                users.map((e, i) => (
                  <div key={i} className="user-container">
                    <h1>{e.username}</h1>
                    <h1>{e.email}</h1>
                    <h1>{e.password}</h1>
                    <h1>{e.user_id}</h1>
                    <button onClick={() => setSelectedUserId(e.user_id)}>Update User</button>
                    {selectedUserId === e.user_id && (
                      <UpdateUser key={i} userId={e.user_id} onUpdateUser={handleUpdateUser} />
                    )}
                    <DeleteUser key={i} classname="hiba" userId={e.user_id} onDelete={handleDelete} />
                  </div>
                ))
              )}
            </>
          )}
          {currentPage === 'users' && (
            // Render users page content or component
            <p>Users Page Content</p>
          )}
          {currentPage === 'bookingflight' && (
            // Render booking flight page content or component
            <p>Booking Flight Page Content</p>
          )}
          {currentPage === 'map' && (
            // Render map page content or component
            <p>Map Page Content</p>
          )}
        </>
      )}
    </div>
  );
}

export default Homeusers;
