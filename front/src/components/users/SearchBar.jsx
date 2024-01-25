// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // SearchBar.jsx
// const handleSearch = () => {
//   onSearch(searchTerm);
// };


  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {/* <button className="search-btn" onClick={handleSearch}>
      
      </button> */}
    </div>
  );
}

export default SearchBar;
