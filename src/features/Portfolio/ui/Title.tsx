import styles from "../styles/portfolio.module.css"

const Title = ({}) => {
  return (
    <section className={styles.portfolioTitle}>
      <h1 className={styles.titleHeader}>Featured Portfolio</h1>
      <p className={styles.titleParam}>Explore how Schrift transforms bold ideas into impactful designs. From branding to digital experiences, our work reflects precision, clarity, and purpose.</p>
    </section>
  )
}

export default Title
