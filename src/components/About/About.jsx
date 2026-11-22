import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { highlights } from '../../data/skills';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.grid}
        >
          {/* Left column */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className="section-label">About Me</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className={styles.heading}>
              A little about me.
            </motion.h2>
            <motion.div variants={fadeUp} className={styles.highlightGrid}>
              {highlights.map((h, i) => (
                <div key={i} className={styles.highlight}>
                  <span className={styles.highlightBullet}>—</span>
                  <span>{h}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <div className={styles.right}>
            <motion.p variants={fadeUp} className={styles.bio}>
              I'm a Full Stack Developer with hands-on experience building business-oriented
              web applications across travel, enterprise management, inventory, and
              media-processing domains.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bio}>
              My work involves frontend development, backend architecture, REST API
              development, database integration, authentication, and third-party service
              integrations.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bio}>
              Before transitioning into software development, I worked in business
              development at Equitas Small Finance Bank. That experience helped me understand
              customer requirements, business workflows, communication, and practical
              problem-solving.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.bio}>
              I bring both technical implementation skills and a business-oriented approach
              to software development.
            </motion.p>

            {/* Contact detail strip */}
            <motion.div variants={fadeUp} className={styles.contactStrip}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a
                  href="mailto:malarkannanmadhavan@gmail.com"
                  className={styles.contactValue}
                >
                  malarkannanmadhavan@gmail.com
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>Madurai, Tamil Nadu, India</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
