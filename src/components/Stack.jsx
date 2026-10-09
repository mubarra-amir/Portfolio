import { useRef, useEffect } from 'react';
import SectionLabel from './SectionLabel';
import { stack } from '../data';
import styles from './Stack.module.css';

export default function Stack() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.querySelectorAll('[data-cell]').forEach((cell,i) => setTimeout(()=>cell.classList.add(styles.visible),i*80));
        obs.disconnect();
      }
    },{threshold:0.1});
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <section className={styles.section} id="stack">
      <SectionLabel num="02" text="Tech Stack"/>
      <div ref={ref} className={styles.grid}>
        {stack.map((item) => (
          <div key={item.label} data-cell className={`${styles.cell} ${styles.reveal}`}>
            <p className={styles.cellLabel}>{item.label}</p>
            <h3 className={styles.cellName}>{item.name}</h3>
            <p className={styles.cellDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
