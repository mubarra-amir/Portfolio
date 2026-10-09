import { tickerItems } from '../data';
import styles from './Ticker.module.css';
export default function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.pair}>
            <span className={styles.item}>{item}</span>
            <span className={styles.sep}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
