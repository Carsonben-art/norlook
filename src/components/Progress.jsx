
import Image from 'next/image';
import styles from '../styles/ProgressSection.module.css';

const Progress = () => {
  return (
    <section className={styles.progressSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Building the Future: Construction Progress and Goals</h2>
          <p>
            Our journey to expand and modernize our facilities is ongoing. Below, 
            you'll find updates on our current progress and a glimpse of the 
            future we're working to achieve.
          </p>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageContainer}>
            <Image
              src="/current.jpeg" 
              alt="Interior construction progress"
              width={600}
              height={400}
              // layout="responsive"
              className={styles.image}
            />
            <p className={styles.caption}>
              Our journey toward improving facilities is in progress! Here's a 
              glimpse of our construction work underway to serve our community better.
            </p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="/hospital.jpg" 
              alt="Exterior construction progress"
              width={600}
              height={400}
              // layout="responsive"
              className={styles.image}
            />
            <p className={styles.caption}>
              We are determined and committed to offer faster, comprehensive and 
              accurate diagnosis to our patients besides taking them through to a 
              complete recovery by fully admitting them in our facility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;