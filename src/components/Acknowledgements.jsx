'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/acknowledgement.module.css';

// Data for the acknowledgment section
const acknowledgments = [
  {
    name: 'Lenora & Joshua',
    position: '',
    text: 'Lenora & Joshua Orwa have been of great help providing us with financial support and many more guidance. Your generosity is unmatched, for more blessings.',
    image: '/orwas.jpeg',
  },
  {
    name: 'Chizubel Beluchi',
    position: 'Business Consultant - UK',
    text: 'Beluchi provided massive support and guidance towards coming up with this medical center. His efforts are greatly appreciated.',
    image: '/beluchi.jpeg',
  },
  {
    name: 'Madam Leticia',
    position: 'Nurse',
    text: 'Madam Leticia has provided us with great support, emotionally, physically, and always offering us guidance.',
    image: '/mrs.jpeg',
  },
  {
    name: 'Mr. Keith Gray',
    position: '',
    text: 'Keith Gray generously supported the Norlook project with a significant contribution. His invaluable support has greatly enhanced our efforts, and we deeply appreciate his kindness and commitment to our mission.',
    image: '/user.jpg',
  },
  {
    name: 'Ronald, Shanon, Corey, Lewis, Christin, Colleen & Enith',
    position: '',
    text: 'We extend our heartfelt gratitude to this incredible group of friends who provided both financial and non-financial support. Your generosity, encouragement, and invaluable contributions have played a crucial role in bringing the Norlook project to life.',
    image: '/users.jpg',
  },
];

const Acknowledgments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next acknowledgment
  const nextAcknowledgment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % acknowledgments.length);
  };

  // Function to go to the previous acknowledgment
  const prevAcknowledgment = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + acknowledgments.length) % acknowledgments.length
    );
  };

  // Auto-switch every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextAcknowledgment();
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.title}>Acknowledgments</h2>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={acknowledgments[currentIndex].image}
            alt={acknowledgments[currentIndex].name}
            width={100}
            height={100}
            layout="responsive"
            priority
          />
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.name}>{acknowledgments[currentIndex].name}</h3>
          {acknowledgments[currentIndex].position && (
            <p className={styles.position}>{acknowledgments[currentIndex].position}</p>
          )}
          <p className={styles.text}>{acknowledgments[currentIndex].text}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.prevButton} onClick={prevAcknowledgment}>
          ←
        </button>
        <button className={styles.nextButton} onClick={nextAcknowledgment}>
          →
        </button>
      </div>
    </section>
  );
};

export default Acknowledgments;
