import { HeaderLogo } from './ui/HeaderLogo'
import { HeaderNavigation } from './ui/HeaderNavigation'
import styles from "./styles/header.module.css"

export const Header = ({}) => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  )
}
