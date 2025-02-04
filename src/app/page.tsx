import { Header } from "@/features/Container/Header";
import { Hero } from "@/features/Container/Hero";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}
