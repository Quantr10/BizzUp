import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2 className="welcome-text">
      <span className="welcome-message">Welcome to</span> 
      <span className="brand"> BizzUp</span>
      </h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="options">
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember</label>
          </div>
          <a href="#forgot-password" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-btn">
          LOGIN
        </button>

        <div className="register-link">
          New User? <a href="#register">Register</a>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
