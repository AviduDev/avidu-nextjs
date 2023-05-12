import styles from "./Process.module.css";

export default function Process() {
  return (
    <section className={styles.section}>
      <h2>process</h2>
      <ul className={styles.processContainer}>

        {/* -------------------------------- */}
        <li className={styles.process}>
          <div className={styles.pcsTtl}>
            <p className={styles.number}>1</p>
            <h3 className={styles.title}>defining</h3>
          </div>
          <div className={styles.pcsDsc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt? Repudiandae illo architecto qui quia amet dicta beatae debitis
            quod provident? Iure laboriosam nobis fuga.
          </div>
        </li>

        {/* ----------------------- */}

        <li className={styles.process}>
          <div className={styles.pcsTtl}>
            <p className={styles.number}>2</p>
            <h3 className={styles.title}>designing</h3>
          </div>
          <div className={styles.pcsDsc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt? Repudiandae illo architecto qui quia amet dicta beatae debitis
            quod provident? Iure laboriosam nobis fuga.
          </div>
        </li>

        {/* ---------------------------- */}

        <li className={styles.process}>
          <div className={styles.pcsTtl}>
            <p className={styles.number}>3</p>
            <h3 className={styles.title}>declare</h3>
          </div>
          <div className={styles.pcsDsc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt? Repudiandae illo architecto qui quia amet dicta beatae debitis
            quod provident? Iure laboriosam nobis fuga.
          </div>
        </li>

        {/* --------------------------------- */}

        <li className={styles.process}>
          <div className={styles.pcsTtl}>
            <p className={styles.number}>4</p>
            <h3 className={styles.title}>develop</h3>
          </div>
          <div className={styles.pcsDsc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt? Repudiandae illo architecto qui quia amet dicta beatae debitis
            quod provident? Iure laboriosam nobis fuga.
          </div>
        </li>

        {/* ------------------------------- */}

        <li className={styles.process}>
          <div className={styles.pcsTtl}>
            <p className={styles.number}>5</p>
            <h3 className={styles.title}>deploy</h3>
          </div>
          <div className={styles.pcsDsc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt? Repudiandae illo architecto qui quia amet dicta beatae debitis
            quod provident? Iure laboriosam nobis fuga.
          </div>
        </li>
      </ul>
    </section>
  );
}
