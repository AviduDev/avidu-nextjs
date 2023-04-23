import styles from "./Anchor.module.css";
import Link from "next/link";

export default function Anchor(props) {
  return (
    <Link href={props.link} className={styles.link}>
      <span className={styles.mask}>
        <div className={styles.linkContainer}>
          <span className={styles.title} id='linkTitle1'>
            {props.text}
          </span>
          <span className={styles.title} id='linkTitle2'>
            {props.text}
          </span>
        </div>
      </span>
    </Link>
  );
}