import { Button } from '../button'
import { Input } from '../input'
import styles from './styles.module.css'

export function ListContainer() {
  return (
    <div className={styles.container}>
      Main Container
      <div>
        <Input />
        <Button />
      </div>
    </div>
  )
}