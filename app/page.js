import { ListContainer } from './components/listContainer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <ListContainer>
        Todo Github
      </ListContainer>
    </main>
  )
}
