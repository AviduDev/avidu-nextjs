import Card from "@/components/Card";
import styles from "../styles/Test.module.css";
import Anchor from "@/components/Anchor";

export default function Test() {
  return (
    <section className={styles.section}>
      <h1>Hi</h1>
      <div className={styles.div}>
        <Anchor link="/" text="and" />
        <Anchor link="/" text="mice" />
        <Anchor link="/" text="soo" />
      </div>

    ------------------------------------

    <Card />
    </section>
  );
}
