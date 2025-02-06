import PortfolioSvg from "@/shared/ui/svgs/PortfolioSvg"
import List from "./ui/List"
import Title from "./ui/Title"
import styles from "./styles/portfolio.module.css"

export const Portfolio = ({}) => {
  return (
    <article className={styles.portfolio}>
      <Title />
      <List />
      <PortfolioSvg className={styles.portfolioSvg} />
    </article>
  )
}

