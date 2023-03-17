import Link from "next/link";
import styles from "./Services.module.css";
import { Lenis } from "@studio-freight/react-lenis";

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.serviceContainer}>
        <ul className={styles.serviceList}>
          <li className={styles.serviceItem}>
            
              <h2>website design</h2>
           
          </li>
          <li className={styles.serviceItem}>
           
              <h2>font-end development </h2>
           
          </li>
          <li className={styles.serviceItem}>
           
              <h2>domain names </h2>
            
          </li>
          {/* <li className={styles.serviceItem}>
            <Link href="/">
              <h2>other services </h2>
            </Link>
          </li> */}
        </ul>
      </div>
    </section>
  );
}
