import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

// type CountDownProps = {
//   formattedSecondsRemaining: string
// }
//ou:
// type CountDownProps = {} & HomeProps;

export function CountDown() {
  return (
    <div className={styles.container}>00:00</div>
  );
}
