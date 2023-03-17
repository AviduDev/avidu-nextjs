import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.contactWrapper}>
          <a
            className={styles.email}
            href="mailto:avidu97@gmail.com subject: I Need a Site"
          >
            avidu97@gmail.com
          </a>
          <div className={styles.linkContainer}>
            <a className={styles.social} href="http://" target="blank">
              <span className={styles.icon}>🡥</span>
              GitHub
            </a>
            <a className={styles.social} href="http://" target="blank">
              <span className={styles.icon}>🡥</span>
              Behance
            </a>
            <a className={styles.social} href="http://" target="blank">
              <span className={styles.icon}>🡥</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
