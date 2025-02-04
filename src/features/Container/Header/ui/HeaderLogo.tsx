import ArrowUp from '@/shared/ui/ArrowUp'
import styles from "../styles/header.module.css";

export const HeaderLogo = ({}) => {
  return (
    <figure className={styles.headerLogo}>
      <figcaption>SCHRIFT</figcaption>
      <ArrowUp params='24' />
    </figure>
  )
}

