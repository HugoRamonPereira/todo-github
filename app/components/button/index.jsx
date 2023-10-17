import styles from './styles.module.css'

export function Button({ text }) {
  return (
    <button className={styles.btn}>
      {text}
    </button>
  )
}