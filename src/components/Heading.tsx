import styles from './Heading.module.css'

export function Heading(props) {
    console.log(props);
    return <h1 className={styles.Heading}>{props.children}</h1>
}