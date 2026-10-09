import { useRef, useEffect } from 'react';
import SectionLabel from './SectionLabel';
import styles from './AISection.module.css';
export default function AISection() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if(!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if(e.isIntersecting){
        el.querySelectorAll('[data-r]').forEach((item,i)=>setTimeout(()=>item.classList.add(styles.visible),i*130));
        obs.disconnect();
      }
    },{threshold:0.15});
    obs.observe(el); return ()=>obs.disconnect();
  },[]);
  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <div data-r className={styles.reveal}><SectionLabel num="03" text="AI-First Approach"/></div>
          <h2 data-r className={`${styles.heading} ${styles.reveal}`}>Not just using AI —<br/><em>building with it.</em></h2>
          <p data-r className={`${styles.body} ${styles.reveal}`}>
            I integrate local LLMs and AI APIs directly into products. From OLLAMA-powered chatbots to NLP pipelines — intelligence is baked in from day one, not bolted on.
          </p>
        </div>
        <div data-r className={`${styles.terminal} ${styles.reveal}`}>
          <div className={styles.termBar}>
            <span className={styles.termDot} style={{background:'#ff5f57'}}/>
            <span className={styles.termDot} style={{background:'#ffbd2e'}}/>
            <span className={styles.termDot} style={{background:'#28c840'}}/>
            <span className={styles.termTitle}>chatbot.py</span>
          </div>
          <div className={styles.termBody}>
            <div><span className={styles.kw}>import</span> <span className={styles.v}>ollama</span></div>
            <br/>
            <div><span className={styles.kw}>def</span> <span className={styles.fn}>chat</span>(<span className={styles.v}>prompt</span>):</div>
            <div className={styles.indent}><span className={styles.v}>response</span> <span className={styles.c}>=</span> <span className={styles.v}>ollama</span>.<span className={styles.fn}>chat</span>({`(`}</div>
            <div className={styles.indent2}><span className={styles.s}>'model'</span><span className={styles.c}>: </span><span className={styles.s}>'llama3'</span><span className={styles.c}>,</span></div>
            <div className={styles.indent2}><span className={styles.s}>'messages'</span><span className={styles.c}>: [{`{`}</span></div>
            <div className={styles.indent3}><span className={styles.s}>'role'</span><span className={styles.c}>: </span><span className={styles.s}>'user'</span><span className={styles.c}>,</span></div>
            <div className={styles.indent3}><span className={styles.s}>'content'</span><span className={styles.c}>: </span><span className={styles.v}>prompt</span></div>
            <div className={styles.indent2}><span className={styles.c}>{`}]`})</span></div>
            <div className={styles.indent}><span className={styles.kw}>return</span> <span className={styles.v}>response</span><span className={styles.c}>[</span><span className={styles.s}>'message'</span><span className={styles.c}>][</span><span className={styles.s}>'content'</span><span className={styles.c}>]</span><span className={styles.cursor}/></div>
          </div>
        </div>
      </div>
    </section>
  );
}