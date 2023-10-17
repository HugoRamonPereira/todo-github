import { Button } from '../button'
import { Input } from '../input'
import styles from './styles.module.css'

export function ListContainer() {
  return (
    <div className={styles.container}>
      Github Posts
      <div className={styles.inputSession}>
        <Input />
        <Button text='Search' />
      </div>
    </div>
  )
}