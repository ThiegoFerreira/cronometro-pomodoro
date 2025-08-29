import styles from './styles.module.css';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona  técnica pomodor</a>
      <a href="">Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
    </footer>
  );
}
