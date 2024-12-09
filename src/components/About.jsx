import '../styles/about.css'
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <h3 className="about-subtitle">Norlook Healthcare</h3>
          <h2 className="about-title">Comprehensive Telemedicine Services</h2>
          <ul className="about-list">
            <li>
              <FaCheckCircle className="about-icon" />
              Virtual consultations from the comfort of your home
            </li>
            <li>
              <FaCheckCircle className="about-icon" />
              Remote vital signs monitoring
            </li>
            <li>
              <FaCheckCircle className="about-icon" />
              24/7 medical support for peace of mind
            </li>
          </ul>
          <button className="about-button">Learn More</button>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <img
            src="/hospital3.jpeg"
            alt="Telemedicine Services"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;