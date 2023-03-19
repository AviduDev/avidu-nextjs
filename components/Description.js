import React, { useEffect, useRef } from "react";
import styles from "./Description.module.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Description() {

  const [lettersRef, setLettersRef] = useArrayRef();

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const reveal = gsap.to(
      lettersRef.current,
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top center",
          end: "bottom 80%"
        },
        color: "#1d1d1d",
        duration: 5,
        stagger: 1
      }
    )

    return () => {
      reveal.kill()
    }
  }, [])

  const text =
    "avidu is a creative web designer and front-end developer from sri lanka";

  return (
    <section className={styles.section}>
      <div className={styles.reveal}>
        <h1 ref={triggerRef} className={styles.centerText}>
          {text.split("").map((letter, index) => (
            <span className={styles.revealText} ref={setLettersRef} key={index}>
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
