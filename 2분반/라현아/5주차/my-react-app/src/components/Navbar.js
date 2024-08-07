import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
        <h1><a href="#home">Favorites</a></h1>
        <ul>
          <li><a href="#study">STUDY</a></li>
          <li><a href="#enjoy">ENJOY</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
