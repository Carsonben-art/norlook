// components/TeamSection.js
import Image from 'next/image';
import styles from '../styles/team.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Mitema Silas',
    role: 'Clinical Officer',
    image: '/mitema.jpeg',
  },
  {
    id: 2,
    name: 'Ben Okoth',
    role: 'Doctor',
    image: '/doc4.jpeg',
  },
  {
    id: 3,
    name: 'Sheila Bwana',
    role: 'Nurse',
    image: '/doc3.jpeg',
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.badge}>Team</div>
        
        <h2 className={styles.title}>
          Meet our expert medical team of dedicated specialists
        </h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <div className={styles.roleBadge}>{member.role}</div>
                <h3 className={styles.memberName}>{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;