import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
        <div className={styles.heroHeading}>
          <motion.div className={styles.heroText}>
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
                A
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
                V
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
                I
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
                D
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
                U
              </motion.span>
            </motion.span>
          </motion.div>
        </div>

        <div className={styles.wrapper}>
          <motion.h2
            className={styles.socialLinks}
            initial={{
              y: 100,
            }}
            animate={{
              y: 0,

              transition: { delay: 0.5, duration: 1, ...transition },
            }}
          >
          <span className={styles.bottomTitle}>website designer</span>
          <span className={styles.bottomTitle}>front-end developer</span>
          </motion.h2>
        </div>

       
      </div>
    </section>
  );
}
