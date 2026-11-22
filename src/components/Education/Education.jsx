import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../../data/education';
import styles from './Education.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Education & Certifications</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className={styles.heading}>
            Academic Background
          </motion.h2>

          <div className={styles.grid}>
            {/* Education */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <GraduationCap size={16} />
                <span>Education</span>
              </div>
              {education.map((item) => (
                <motion.div key={item.id} variants={fadeUp} className={styles.card}>
                  <div className={styles.cardPeriod}>{item.period}</div>
                  <h3 className={styles.cardTitle}>{item.degree}</h3>
                  <div className={styles.cardInstitution}>{item.institution}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className={styles.column}>
              <div className={styles.columnHeader}>
                <Award size={16} />
                <span>Certifications</span>
              </div>
              {certifications.map((item) => (
                <motion.div key={item.id} variants={fadeUp} className={styles.card}>
                  <div className={styles.cardPeriod}>{item.period}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.cardInstitution}>{item.institution}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
