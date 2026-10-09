import { useEffect, useRef } from 'react';
import styles from './FeaturedViz.module.css';
const INITIAL = [4,7,5,9,6,3,8,5,7,4,6,9,5,7,3,8,6,4,9,7];
export default function FeaturedViz() {
  const barsRef = useRef([]);
  useEffect(() => {
    const id = setInterval(() => {
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        if (Math.random() > 0.65) bar.classList.toggle(styles.active);
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={styles.viz}>
      {INITIAL.map((v, i) => (
        <div key={i} ref={(el) => (barsRef.current[i]=el)}
          className={`${styles.bar} ${v>6?styles.active:''}`}
          style={{ height:`${v*7}px` }}/>
      ))}
    </div>
  );
}
