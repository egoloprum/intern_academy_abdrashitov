import styles from "../styles/hero.module.css"
import ArrowDown from '@/shared/ui/ArrowDown'

const HeroFooter = ({}) => {
  return (
    <section className={styles.heroFooter}>
      <p className={styles.heroFooterLeft}>BOLD VISIONS. PRECISE EXECUTION</p>
      <p className={styles.heroFooterMiddle}>{}</p>
      <p className={styles.heroFooterRight}>
        <span>DISCOVER OUR WORK</span>
        <ArrowDown />
      </p>
    </section>
  )
}

export default HeroFooter
