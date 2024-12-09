"use client";
import React, { useState } from "react";
import "../styles/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Norlook</span>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#equipment">Support</a>
          <a href="#contacts">Contacts</a>
        </div>
        <div className="nav-actions">
          <button className="nav-button">Get Started</button>
        </div>
        <div className="nav-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;