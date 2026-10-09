import { useRef, useEffect } from 'react';
import { contactLinks } from '../data';
import styles from './Contact.module.css';
export default function Contact() {
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
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.inner}>
        <div data-r className={styles.reveal}>
          <h2 className={styles.heading}>Let's build<br/>something<br/><em>great.</em></h2>
        </div>
        <div data-r className={`${styles.right} ${styles.reveal}`}>
          <p className={styles.body}>I'm open to freelance projects, collaborations, and full-time roles. If you need a developer who ships AI-powered products — let's talk.</p>
          <div className={styles.links}>
            {contactLinks.map((link)=>(
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.linkName}>{link.label}</span>
                <span className={styles.linkArr}>↗</span>
              </a>
            ))}
          </div>
          <button className={styles.cta} onClick={()=>window.open('https://wa.me/923254438379','_blank')}>
            Start a conversation ↗
          </button>
        </div>
      </div>
    </section>
  );
}