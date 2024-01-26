import React from "react";
import './NavBar.css'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Users"}>Users</NavLink>
        <NavLink to={"/Bookings"}>Bookings</NavLink>
        <NavLink to={"/Flights"}>Flights</NavLink>
    </nav>
  );
}

export default NavBar;
