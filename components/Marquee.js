import styles from "./Marquee.module.css";

export default function Marquee() {
  return (
    <section>
      <div className={styles.marquee}>
        <h2 className={styles.marqueeTitle}>
          WEBSITE DESIGNER AND FRONTEND DEVELOPER GRAPHIC DESIGNER FROM SRI LANKA
        </h2>
      </div>
    </section>
  );
}
