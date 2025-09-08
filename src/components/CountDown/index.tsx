
import { useContext } from 'react';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

// type CountDownProps = {
//   formattedSecondsRemaining: string
// }
//ou:
// type CountDownProps = {} & HomeProps;

export function CountDown() {
  const taskContext = useTaskContext();
  console.log(taskContext);

  return <div className={styles.container}>00:00</div>;
}
