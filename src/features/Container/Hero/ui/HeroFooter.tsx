import Arrow from "@/shared/ui/Arrow"
import styles from "../styles/hero.module.css"

const HeroFooter = ({}) => {
  return (
    <section className={styles.heroFooter}>
      <p>BOLD VISIONS. PRECISE EXECUTION</p>
      <p>{}</p>
      <p>
        <span>DISCOVER OUR WORK</span>
        <Arrow params="16" />
      </p>
    </section>
  )
}

export default HeroFooter
