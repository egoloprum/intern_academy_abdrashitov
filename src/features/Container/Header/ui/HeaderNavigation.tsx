import styles from "../styles/header.module.css"
import Arrow from '@/shared/ui/Arrow'

export const HeaderNavigation = ({}) => {
  return (
    <nav className={styles.headerNav}>
      <p>ABOUT</p>
      <p>SERVICES</p>
      <p>PORTFOLIO</p>
      <p className={styles.navContact}>
        <span>LET&apos;S TALK</span>
        <Arrow params='18' />
      </p>
    </nav>
  )
}


