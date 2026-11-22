import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={`${styles.project} ${isEven ? styles.projectEven : styles.projectOdd}`}
    >
      {/* Project preview */}
      <div className={styles.preview} style={{ background: project.color }}>
        <div className={styles.previewInner}>
          {/* Browser chrome mockup */}
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span style={{ background: '#FF5F57' }} />
                <span style={{ background: '#FEBC2E' }} />
                <span style={{ background: '#28C840' }} />
              </div>
              <div className={styles.browserUrl}>
                <span>{project.title.toLowerCase().replace(/\s+/g, '-')}.app</span>
              </div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.placeholderScreen}>
                <div className={styles.placeholderNav} />
                <div className={styles.placeholderBody}>
                  <div className={styles.placeholderSidebar} />
                  <div className={styles.placeholderMain}>
                    <div className={styles.placeholderBlock} />
                    <div className={styles.placeholderRow}>
                      <div className={styles.placeholderCard} />
                      <div className={styles.placeholderCard} />
                      <div className={styles.placeholderCard} />
                    </div>
                    <div className={styles.placeholderBlock} style={{ width: '70%' }} />
                    <div className={styles.placeholderBlock} style={{ width: '50%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project number badge */}
          <div className={styles.projectNum} style={{ color: project.accent }}>
            {project.id}
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <span className={styles.category}>{project.category}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>

        {/* Tech tags */}
        <div className={styles.tags}>
          {project.tech.map((t, i) => (
            <span key={i} className={styles.tag}>{t}</span>
          ))}
        </div>

        {/* Expand / collapse */}
        <button
          className={styles.expandBtn}
          onClick={() => setExpanded(e => !e)}
          aria-expanded={expanded}
        >
          <span>Key Contributions</span>
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              className={styles.contributions}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.contributions.map((c, i) => (
                <motion.li
                  key={i}
                  className={styles.contribution}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span
                    className={styles.contribDot}
                    style={{ background: project.accent }}
                  />
                  <span>{c}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">Projects</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className={styles.heading}>
            Featured Work
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.subheading}>
            A selection of projects I've built — from full-stack web applications
            to enterprise systems and ML-integrated platforms.
          </motion.p>
        </motion.div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
