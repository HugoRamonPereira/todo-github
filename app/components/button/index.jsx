import styles from './styles.module.css'

export function Button({ onClick, text }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  )
}