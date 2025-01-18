import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>GSG Dealership</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
