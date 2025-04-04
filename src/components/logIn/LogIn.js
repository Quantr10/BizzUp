
import { useState } from 'react';
import './LogIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {auth} from "../Firebase";
import {toast} from "react-toastify";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href="/home";
      toast.success("User logged in successfully", {
        position: "top-center",
      })
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };


  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="welcome-text">
        <span className="welcome-message">Welcome to</span>
        <span className="brand"> BizzUp</span>
        </h2>
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
            New User? <a href="register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LogIn;