import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Mubarra Amir — Web Developer & AI Integrator</p>
      <button className={styles.top} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to top ↑</button>
    </footer>
  );
}