import '../styles/vision.css'
import { FaHeartbeat, FaShieldAlt, FaUsers } from "react-icons/fa";

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        <div className="vision-left">
          <h2 className="vision-title">"Empowering Health, Enriching Lives"</h2>
          <p className="vision-description">
            At Norlook Community Hospital, we are driven by a vision of care,
            innovation, and compassion. We aim to provide accessible healthcare
            services tailored to the needs of every individual, ensuring a
            healthier, brighter tomorrow for our community.
          </p>
          <button className="learn-more-btn">Learn More About Us</button>
        </div>
        <div className="vision-right">
          <div className="vision-card">
            <FaHeartbeat className="vision-icon" />
            <div>
              <h3 className="card-title">Comprehensive Care</h3>
              <p className="card-description">
                Offering personalized and advanced treatments to address every
                health need even to the vulnerable and the elderly.
              </p>
            </div>
          </div>
          <div className="vision-card">
            <FaShieldAlt className="vision-icon" />
            <div>
              <h3 className="card-title">Patient-Centered Approach</h3>
              <p className="card-description">
                Prioritizing your comfort and safety at every step of your
                healthcare journey.
              </p>
            </div>
          </div>
          <div className="vision-card">
            <FaUsers className="vision-icon" />
            <div>
              <h3 className="card-title">Community First</h3>
              <p className="card-description">
                Building a healthier future together by supporting our
                community’s well-being through medical camps, creating
                awareness, and educating the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;