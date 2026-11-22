import { ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.name}>Madhavan M</div>
          <div className={styles.role}>Full Stack Developer</div>
          <div className={styles.copy}>© {year} Madhavan M. All rights reserved.</div>
        </div>

        <button
          className={styles.backTop}
          onClick={handleBackToTop}
          aria-label="Back to top"
          id="footer-back-to-top"
        >
          <ArrowUp size={16} />
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}
