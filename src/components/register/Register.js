import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../logIn/LogIn.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


 
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);


  };


  return (
    <div className="login-container">
      <h2 className="brand">Register</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>


        <p className="terms">
          By creating an account, you agree to our <span className="termsofservice">Terms of Service</span>.
        </p>


        <button type="submit" className="login-btn">
          REGISTER
        </button>
      </form>


      <div className="register-link">
        Already have an account? <a href="login">Log In</a>
      </div>
    </div>
  );
};


export default Register;