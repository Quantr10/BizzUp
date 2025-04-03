import React, { useState } from "react";
import "./navbar.css";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  const [active, setActive] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false); // Close menu on selection (for mobile)
  };

  return (
    <nav className="navbar">
      <div className="logo">Bizz<span className="up">Up</span></div>
      
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

      <div className="user-icon">
        <FaUser />
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default NavBar;
