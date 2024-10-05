import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {

  const handleHomeClick = () => {
    localStorage.removeItem('appState'); // Reset the app state
    window.location.reload();
  };

  
  return (
    <header className="App-header">
      <div className="header-content">
        <button onClick={handleHomeClick}>
          <FontAwesomeIcon icon={faHome} size="lg" />
        </button>
        <h1>Hogwarts Learning Portal</h1>
        <img src={'./logo.jpg'} alt="Hogwarts Icon"/>
      </div>
    </header>
  );
  
}

export default Header;