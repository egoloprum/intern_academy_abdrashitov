import { Header } from "@/features/Container/Header";
import { Hero } from "@/features/Container/Hero";
import styles from "./page.module.css"
import { About } from "@/features/About";
import { Services } from "@/features/Services";
import { Portfolio } from "@/features/Portfolio";
import { Testimonials } from "@/features/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  );
}
