import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Mail } from 'lucide-react';
import styles from './Hero.module.css';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const handleScrollDown = () => {
    const about = document.getElementById('about');
    if (about) {
      const y = about.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className={styles.eyebrow}>
            <span className={styles.eyebrowText}>Full Stack Developer · India</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className={styles.headline}>
            Building digital experiences that{' '}
            <span className={styles.emphasisLine}>
              solve real problems.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className={styles.description}>
            I'm a Full Stack Developer focused on building scalable web applications,
            intuitive interfaces, and reliable backend systems. I enjoy turning complex
            business requirements into practical software solutions.
          </motion.p>

          {/* Meta */}
          <motion.div variants={fadeUp} className={styles.meta}>
            <div className={styles.metaItem}>
              <MapPin size={14} />
              <span>Madurai, Tamil Nadu, India</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.availDot} />
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className={styles.ctas}>
            <button
              className="btn btn-primary"
              onClick={() => handleNav('#projects')}
              id="hero-explore-btn"
            >
              Explore My Work
            </button>
            <button
              className="btn btn-outline"
              onClick={() => handleNav('#contact')}
              id="hero-contact-btn"
            >
              <Mail size={15} />
              Let's Talk
            </button>
          </motion.div>
        </motion.div>

        {/* Right decoration */}
        <motion.div
          className={styles.decoration}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.codeCard}>
            <div className={styles.codeBar}>
              <span className={styles.codeDot} style={{ background: '#FF5F57' }} />
              <span className={styles.codeDot} style={{ background: '#FEBC2E' }} />
              <span className={styles.codeDot} style={{ background: '#28C840' }} />
              <span className={styles.codeFilename}>portfolio.jsx</span>
            </div>
            <pre className={styles.codeContent}>
              <code>
{`const developer = {
  name: "Madhavan M",
  role: "Full Stack Developer",
  stack: [
    "React", "Next.js",
    "Node.js", "Express",
    "MySQL", "MongoDB"
  ],
  focus: "Building scalable
          web applications",
  status: "Available ✓"
};`}
              </code>
            </pre>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>10+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className={styles.scrollIndicator}
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        aria-label="Scroll down"
      >
        <span className={styles.scrollText}>Scroll</span>
        <motion.div
          className={styles.scrollIcon}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
