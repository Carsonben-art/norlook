'use client';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contactSection} id='contacts'>
      <h2 className={styles.title}>Get in Touch with Norlook Medical Centers</h2>
      <p className={styles.subtitle}>
        Reach out to us via phone, email, or visit our location at Mawego Village, Linda Center.
      </p>

      <div className={styles.container}>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <h3>Call Us</h3>
              <p>+254 790140 459</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h3>Email Us</h3>
              <p>contact@norlookmedical.com</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h3>Visit Us</h3>
              <p>Mawego Village, Linda Centre, near Mawego Polytechnic</p>
            </div>
          </div>

          <button className={styles.contactButton}>Contact Us</button>
        </div>

        <div className={styles.map}>
          <iframe
            title="Norlook Medical Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.723402685963!2d34.767595174356174!3d-0.39521683530009405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4d5361a6d8229%3A0xe8667399a86520be!2sMawego%20Technical%20Training%20Institute!5e0!3m2!1sen!2ske!4v1731921994087!5m2!1sen!2ske"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
