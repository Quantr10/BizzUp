import React, { useState } from "react";
import "./NavBar.css";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Import the custom context hook
import { auth } from "../Firebase";


const NavBar = () => {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserTab, setShowUserTab] = useState(false);
  const { userDetails } = useUser(); // Use context here
  const navigate = useNavigate();


  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false);

    if (section === "LOCALS") {
      navigate("/locals");
    } else if (section === "HOME") {
      navigate("/home");
    } else if (section === "SCAN") {
        navigate("/scan");
    }

  };

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Bizz<span className="up">Up</span>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["HOME", "DEALS", "LOCALS", "MY REWARDS", "SCAN"].map((item) => (
          <span
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="user-wrapper">
        <FaUser className="user-icon" onClick={() => setShowUserTab(!showUserTab)} />
        {showUserTab && userDetails && (
          <div className="user-tab">
            <p><strong>Hi, {userDetails.name}</strong></p>
            <p>{userDetails.email}</p>
            <hr />
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
