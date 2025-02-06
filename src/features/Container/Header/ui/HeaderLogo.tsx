import styles from "../styles/header.module.css";
import Arrow from '@/shared/ui/Arrow';

export const HeaderLogo = ({}) => {
  return (
    <figure className={styles.headerLogo}>
      <figcaption>SCHRIFT</figcaption>
      <Arrow params='24' />
    </figure>
  )
}

