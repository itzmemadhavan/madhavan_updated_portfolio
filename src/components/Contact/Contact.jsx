import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, GitFork, ExternalLink, Send, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={stagger}
          className={styles.wrapper}
        >
          {/* Left */}
          <div className={styles.left}>
            <motion.div variants={fadeUp}>
              <span className="section-label">Contact</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className={styles.heading}>
              Have a project in mind?{' '}
              <span className={styles.headingEmphasis}>Let's build something meaningful.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.description}>
              I'm open to discussing software development opportunities,
              collaborations, and interesting projects.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.contactDetails}>
              <a href="mailto:malarkannanmadhavan@gmail.com" className={styles.contactLink} id="contact-email-link">
                <div className={styles.contactIcon}>
                  <Mail size={16} />
                </div>
                <div>
                  <div className={styles.contactType}>Email</div>
                  <div className={styles.contactValue}>malarkannanmadhavan@gmail.com</div>
                </div>
              </a>

              <div className={styles.contactLink}>
                <div className={styles.contactIcon}>
                  <MapPin size={16} />
                </div>
                <div>
                  <div className={styles.contactType}>Location</div>
                  <div className={styles.contactValue}>Madurai, Tamil Nadu, India</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className={styles.socials}>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                id="contact-github-link"
                aria-label="GitHub Profile"
              >
                <GitFork size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                id="contact-linkedin-link"
                aria-label="LinkedIn Profile"
              >
                <ExternalLink size={18} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div variants={fadeUp} className={styles.formWrapper}>
            {submitted ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={40} strokeWidth={1.5} style={{ color: '#22C55E' }} />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email-input" className={styles.label}>Email</label>
                    <input
                      id="contact-email-input"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className={styles.input}
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={sending}
                  id="contact-submit-btn"
                >
                  {sending ? (
                    <>
                      <div className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
