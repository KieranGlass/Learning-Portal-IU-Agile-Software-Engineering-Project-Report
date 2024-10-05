import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to validate credentials
    console.log('Login submitted:', username, password);
    onSubmit(username === 'admin' && password === 'password');
  };

  return (
    // Remove the form element here since the form submission will be handled by MainContent
    <div className="loggingInForm">
      <input 
        id="username"
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="RonWeasley12345"
      /><br />
      <input 
        id="password"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="ilovegryffindor"
      /><br />
    </div>
  );
};

export default LoginForm;