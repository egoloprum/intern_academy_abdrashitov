import styles from "../styles/hero.module.css"

const HeroText = ({}) => {
  return (
    <section className={styles.heroText}>
      <p className={styles.heroTextTop}>EST 21.12.24</p>
      <p className={styles.heroTextBottom}>A place where design philosophy blends innovation and clarity to create impactful solutions</p>
    </section>
  )
}

export default HeroText
