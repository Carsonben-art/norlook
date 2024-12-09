import '../styles/hero.css'
import { FaStethoscope, FaUserMd, FaPeopleArrows } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Compassionate Care <br />
          Close to Home – <br />
          <span className="highlight">Norlook Medical Center</span>{" "}
          <span className="coming-soon">Coming Soon</span>
        </h1>
        <div className="statistics">
          <div className="stat">
            <FaStethoscope className="icon" />
            <p>
              <strong>58%</strong>
              <br />
              Construction Completion
            </p>
          </div>
          <div className="stat">
            <FaUserMd className="icon" />
            <p>
              <strong>50%</strong>
              <br />
              Equipment Acquired
            </p>
          </div>
          <div className="stat">
            <FaPeopleArrows className="icon" />
            <p>
              <strong>6</strong>
              <br />
              Expert Doctors & Clinicians
            </p>
          </div>
          <div className="stat">
            <FaPeopleArrows className="icon" />
            <p>
              <strong>1000+</strong>
              <br />
              Targeted Population
            </p>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="cta primary">Book Now</button>
          <button className="cta secondary">Learn more</button>
        </div>
        <div className="team">
          <h4>Meet Our Team</h4>
          <img src="/docs.jpeg" alt="our tema" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/hospital1.jpg" alt="Healthcare professionals" />
      </div>
    </div>
  );
}
