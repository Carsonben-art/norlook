// components/EquipmentSection.js
// import Image from 'next/image';
import styles from '../styles/equipment.module.css';

const equipmentData = [
  {
    id: 1,
    name: 'Vivid E9 Ultrasound Machine',
    image: '/ultrasound.jpg',
    urgency: 'IMMEDIATELY',
    urgencyType: 'high'
  },
  {
    id: 2,
    name: 'Digital X-Ray Machine',
    image: '/xray.jpg',
    urgency: 'WAITING',
    urgencyType: 'medium'
  },
  {
    id: 3,
    name: 'Single Crank Hospital Bed',
    image: '/crank.jpg',
    urgency: 'IMMEDIATELY',
    urgencyType: 'high'
  },
  {
    id: 4,
    name: 'Patient Monitoring Devices',
    image: '/monitoring.jpg',
    urgency: 'IMMEDIATELY',
    urgencyType: 'high'
  },
  {
    id: 5,
    name: 'RX 50 Biochemistry Analyzer',
    image: '/biochemistry.jpg',
    urgency: 'IMMEDIATELY',
    urgencyType: 'high'
  }
];

const Equipment = () => {
  return (
    <section className={styles.equipmentSection} id='equipment'>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Support Our Mission: Equipment and Facilities Needed</h2>
          <p>
            At Norlook, we strive to provide the best care to our patients. 
            However, to meet growing needs and improve our services, we require 
            additional resources. Your contribution can help us acquire these 
            essential items. Explore our current needs below and join us in 
            making a difference.
          </p>
        </div>

        <div className={styles.equipmentGrid}>
          {equipmentData.map((item) => (
            <div key={item.id} className={styles.equipmentCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="400px"
                  height="300px"
                  layout="responsive"
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{item.name}</h3>
                <div className={`${styles.urgencyBadge} ${styles[item.urgencyType]}`}>
                  URGENCY: {item.urgency}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;