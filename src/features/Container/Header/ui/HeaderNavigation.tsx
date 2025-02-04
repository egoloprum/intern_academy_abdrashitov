import NavLink from '@/shared/ui/NavLink'
import styles from "../styles/header.module.css"
import ArrowUp from '@/shared/ui/ArrowUp'

export const HeaderNavigation = ({}) => {
  return (
    <nav className={styles.headerNav}>
      <NavLink>ABOUT</NavLink>
      <NavLink>SERVICES</NavLink>
      <NavLink>PORTFOLIO</NavLink>
      <NavLink className={styles.navContact}>
        <span>LET&apos;S TALK</span>
        <ArrowUp params='18' />
      </NavLink>
    </nav>
  )
}


