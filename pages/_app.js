import "@/styles/globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function App({ Component, pageProps }) {
  return (
    <ReactLenis root options={{ 
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 2,
      smoothTouch: false,
      touchMultiplier: 0.2,
      infinite: false
     }}>
      <Component {...pageProps} />
    </ReactLenis>
  );
}
