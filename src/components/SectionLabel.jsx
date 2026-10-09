import styles from './SectionLabel.module.css';
export default function SectionLabel({ num, text }) {
  return (
    <div className={styles.label}>
      <span className={styles.num}>{num}</span>
      <div className={styles.line}/>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
