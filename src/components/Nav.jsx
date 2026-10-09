import styles from './Nav.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logoImg} src={`${import.meta.env.BASE_URL}logo.png`} alt="mubarra.dev" />
      <div className={styles.links}>
        <a href="#projects">Work</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={styles.avail}><span className={styles.dot}/>Available for work</div>
    </nav>
  );
}