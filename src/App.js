import './App.css';
import React from 'react';
import LogIn from './components/logIn/LogIn';
import Locals from './components/locals/Locals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="App">
        <Locals/>
        
        {/* <div className="auth-inner">
          <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<LogIn/>}/> 
          </Routes>
          <ToastContainer/>
        </div>
         */}
        
      </div>
    </Router>
    
  );
}

export default App;
