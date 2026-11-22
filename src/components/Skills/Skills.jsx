import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Technical Skills</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className={styles.heading}>
            Tools & Technologies
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.subheading}>
            Technologies I work with across the full development stack.
          </motion.p>

          <div className={styles.grid}>
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className={styles.group}
              >
                <span className={styles.groupLabel}>{group.category}</span>
                <div className={styles.items}>
                  {group.items.map((item, j) => (
                    <span key={j} className={styles.skillItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
