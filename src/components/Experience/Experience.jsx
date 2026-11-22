import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function ExperienceItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={styles.item}
    >
      {/* Timeline visual column */}
      <div className={styles.timelineCol}>
        <div className={`${styles.dot} ${item.current ? styles.dotActive : ''}`} />
        {index < experience.length - 1 && <div className={styles.line} />}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h3 className={styles.role}>{item.role}</h3>
            <div className={styles.company}>
              {item.company}
              <span className={styles.type}>{item.type}</span>
            </div>
          </div>
          <div className={styles.period}>
            {item.current && <span className={styles.currentBadge}>Current</span>}
            <span>{item.period}</span>
          </div>
        </div>

        <ul className={styles.responsibilities}>
          {item.responsibilities.map((r, i) => (
            <li key={i} className={styles.responsibility}>
              <span className={styles.bullet} />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Experience</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className={styles.heading}>
            Professional Journey
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.subheading}>
            Building and shipping software across multiple domains and industries.
          </motion.p>
        </motion.div>

        <div className={styles.timelineList}>
          {experience.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
