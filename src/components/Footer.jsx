import React from "react";
import { FaHeart } from "react-icons/fa";
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <FaHeart className="footer-icon" />
            <span className="footer-brand">Norlook</span>
          </div>
          <p className="footer-description">
            "Your Health, Our Priority."
            <br />
            Caring for you with excellence and compassion, every step of the way.
          </p>
        </div>
        <div className="footer-section">
          <h4>Static Pages</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CMS Pages</h4>
          <ul>
            <li>Services</li>
            <li>Doctors</li>
            <li>Careers</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Details Pages</h4>
          <ul>
            <li>Service (CMS)</li>
            <li>Doctor (CMS)</li>
            <li>Career (CMS)</li>
            <li>Blogs (CMS)</li>
          </ul>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;