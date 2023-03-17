import styles from "./Circle.module.scss";
import Script from "next/script";
import { gsap } from "gsap";
import { delay, motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

export default function Circle() {
  return (
    <>
      <motion.div className={styles.model}>
        <motion.span
          className={styles.first}
          initial={{
            y: 0,
          }}
          animate={{
            y: 0,
            transition: {
              delayChildren: 0.6,
              staggerChildren: 0.04,
              staggerDirection: -1,
            },
          }}
        >
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { duration: 1, ...transition },
            }}
          >
            Y
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { delay: 0.1, duration: 1, ...transition },
            }}
          >
            a
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { delay: 0.2, duration: 1, ...transition },
            }}
          >
            s
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { delay: 0.3, duration: 1, ...transition },
            }}
          >
            m
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { delay: 0.4, duration: 1, ...transition },
            }}
          >
            e
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            animate={{
              y: 0,
              transition: { delay: 0.5, duration: 1, ...transition },
            }}
          >
            e
          </motion.span>
          <motion.span
            initial={{
              y: 400,
            }}
            delay={{}}
            animate={{
              y: 0,
              transition: { delay: 0.6, duration: 1, ...transition },
            }}
          >
            n
          </motion.span>
        </motion.span>
      </motion.div>
    </>
  );
}
