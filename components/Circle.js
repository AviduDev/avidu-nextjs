import styles from "./Circle.module.scss";
import Script from "next/script";
import { gsap, ScrollTrigger } from "gsap";
import { delay, motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export default function Circle() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.to(".title", {
        backgroundPositionX: "0%",
     
        scrollTrigger: {
          trigger: ".title",
          scrub: 1,
          start: "top center",
          end: "bottom top",
        },
      });
    }, root); // <- scopes all selector text to the root element

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={styles.section}>
      <div>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, atque.
        </h1>
      </div>
    </section>
  );
}
