// Navbar.js
import React from 'react';

function Navbar({ onNavigate }) {
  return (
    <nav>
      <ul>
        <li onClick={() => onNavigate('home')}>Home</li>
        <li onClick={() => onNavigate('users')}>Users</li>
        <li onClick={() => onNavigate('bookingflight')}>Booking Flight</li>
        <li onClick={() => onNavigate('map')}>Map</li>
        {/* Add more items as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
