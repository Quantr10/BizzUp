

import './App.css';
import React from 'react';
import LogIn from './components/logIn/LogIn';
import Locals from './components/locals/Locals';
import NavBar from './components/navBar/navbar';
import Register from './components/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
     
          <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/register" element={<Register/>}/>
            </Routes>
          <ToastContainer/>
       
      </div>
    </Router>
   
  );
}


export default App;