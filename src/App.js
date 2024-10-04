
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './components/Student';
import Professor from './components/Professor';
import Header from './components/Header';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
          <Route path="Student" element={<Student />} />
          <Route path="professor" element={<Professor />} />
      </Routes>
    </Router>
  );
}

export default App;