
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <Router>
      <Header />
          <MainContent 
            showProfile={showProfile}
            setShowProfile={setShowProfile}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
    </Router>
  );
}

export default App;