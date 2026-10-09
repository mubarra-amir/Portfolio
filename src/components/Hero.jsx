import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
export default function Hero() {
  const subRef  = useRef(null);
  const metaRef = useRef(null);
  useEffect(() => {
    const t1 = setTimeout(() => { if(subRef.current)  subRef.current.style.opacity  = '1'; }, 600);
    const t2 = setTimeout(() => { if(metaRef.current) metaRef.current.style.opacity = '1'; }, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.grid}/>
      <div className={styles.glow}/>
      <div className={styles.glow2}/>
      <div className={styles.counter}>
        <span className={styles.counterNum}>2026</span>
        <div className={styles.counterLine}/>
      </div>
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <div className={styles.eyebrowLine}/>
          <span className={styles.eyebrowText}>Web Developer — AI Integration</span>
        </div>
        <h1 className={styles.h1}>
          <span className={styles.line}><span className={styles.li}>Building</span></span>
          <span className={styles.line}><span className={`${styles.li} ${styles.d1}`}>with <em>AI</em> at</span></span>
          <span className={styles.line}><span className={`${styles.li} ${styles.d2}`}>its core.</span></span>
        </h1>
        <p ref={subRef} className={styles.sub}>
          I build full-stack web products and integrate intelligent AI systems — chatbots, automation tools, and smart interfaces that actually work.
        </p>
      </div>
      <div ref={metaRef} className={styles.meta}>
        <p>Lahore, PK</p>
        <p>Open to remote and onsite work</p>
      </div>
    </section>
  );
}