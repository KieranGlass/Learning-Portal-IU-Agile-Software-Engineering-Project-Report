
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Student from './Student';
import Professor from './Professor';
import LoginForm from './LoginForm';

function MainContent() {
    const [showProfile, setShowProfile] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate(); // Use react-router's navigate for navigation

    useEffect(() => {
      // Check if there's saved state in localStorage
      const savedState = localStorage.getItem('appState');
      
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        setShowProfile(parsedState.showProfile);
        setSelectedRole(parsedState.selectedRole);
        setLoginSuccess(parsedState.loginSuccess || false);
        console.log("Initial selected role:", parsedState.selectedRole);
      } else {
        console.log("No saved state found");
        setShowProfile(false);
        setSelectedRole(null);
        setLoginSuccess(false);
      }
    }, []);

    const handleRoleSelection = (role) => {
        console.log("handleRoleSelection called with role:", role);
        setSelectedRole(role);
        setLoginSuccess(false);

        // Save the new state to localStorage immediately
        localStorage.setItem('appState', JSON.stringify({
            showProfile: true,
            selectedRole: role,
            loginSuccess: false
        }));

        // Navigate based on role immediately without relying on state update
        if (role === 'Student') {
            navigate('/student');
        } else if (role === 'Professor') {
            navigate('/professor');
        }

        console.log("Selected role after update:", role);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("handleLoginSubmit called");
        setLoginSuccess(true);
        setShowProfile(true);

        // Update localStorage with login success status
        localStorage.setItem('appState', JSON.stringify({
            showProfile: true,
            selectedRole: selectedRole,
            loginSuccess: true
        }));

        // Navigate based on selected role
        if (selectedRole === 'Student') {
            navigate('/student');
        } else if (selectedRole === 'Professor') {
            navigate('/professor');
        }

        console.log("Final selected role:", selectedRole);
    };

    return (
        <main className="main-content">
            {showProfile && loginSuccess ? (
                // Show routes if logged in and profile should be shown
                <div className="profile-card">
                    <Routes>
                        <Route path="/student" element={<Student setShowProfile={setShowProfile} setSelectedRole={setSelectedRole} />} />
                        <Route path="/professor" element={<Professor setShowProfile={setShowProfile} setSelectedRole={setSelectedRole} />} />
                    </Routes>
                </div>
            ) : (
                // Show the login form if the profile is not shown yet
                <div className="login-container">
                <form onSubmit={handleLoginSubmit}>
                  {/* Radio buttons group */}
                  <div className="radio-group">
                    <input
                      className="radioButton"
                      type="radio"
                      id="student"
                      name="role"
                      value="Student"
                      checked={selectedRole === 'Student'}
                      onChange={() => handleRoleSelection('Student')}
                    />
                    <label htmlFor="student" className="radio-label student-label">Student</label>
            
                    <input
                      className="radioButton"
                      type="radio"
                      id="professor"
                      name="role"
                      value="Professor"
                      checked={selectedRole === 'Professor'}
                      onChange={() => handleRoleSelection('Professor')}
                    />
                    <label htmlFor="professor" className="radio-label professor-label">Professor</label>
                  </div>
            
                  {/* Login form */}
                  <LoginForm />
            
                  {/* Submit button */}
                  <button type="submit">Login</button>
                </form>
              </div>
            )}
        </main>
    );
}

export default MainContent;