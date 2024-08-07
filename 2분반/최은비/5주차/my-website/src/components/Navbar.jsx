import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Favorite Things</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorite1">스포츠</Link>
        </li>
        <li>
          <Link to="/favorite2">OTT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
