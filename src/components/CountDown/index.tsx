import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';


export function CountDown() {
  const {state, setState} = useTaskContext();

  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
