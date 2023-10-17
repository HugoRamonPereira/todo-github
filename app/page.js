"use client";
import { ListContainer } from "./components/listContainer";
import styles from "./page.module.css";
import { Button } from "./components/button";
import useTheme from "./hooks/useTheme";

export default function Home() {
  const { theme, switchTheme } = useTheme();
  console.log(theme);
  return (
    <main className={styles.main}>
      <div className={theme["theme-bg"]}>
        <ListContainer>Todo Github</ListContainer>
        <Button onClick={switchTheme} text="Tema" />
      </div>
    </main>
  );
}
