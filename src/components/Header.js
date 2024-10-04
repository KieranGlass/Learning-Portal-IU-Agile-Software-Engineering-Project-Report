import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Glass University</h1>
      <nav>
          <li><Link to="/student">Student</Link></li>
          <li><Link to="/professor">Professor</Link></li> 
      </nav>
    </header>
  );
}

export default Header;