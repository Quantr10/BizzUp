import './App.css';
import React from 'react';
import LogIn from './components/logIn/LogIn';
import Locals from './components/locals/Locals';
import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';
import Register from './components/register/Register';
import Scan from './components/scan/Scan';
import Deals from './components/deals/Deals';
import UploadLocals from './components/locals/UploadLocals';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useUser } from './components/contexts/UserContext';

function AppWrapper() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { userDetails, loading } = useUser();
  const location = useLocation();
  const hideNavBarOn = ['/login', '/register'];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      {userDetails && !hideNavBarOn.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={userDetails ? <Navigate to="/home" /> : <LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/locals" element={<Locals />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/deals" element={<Deals />} />
        {/* <Route path="/upload" element={<UploadLocals />} /> */}
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default AppWrapper;
