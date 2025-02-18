import { FC } from 'react'
import Logo from './assets/logo.svg' 
import styles from './navbar.module.scss'

interface NavbarProps {
  
}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className={styles[`navbar`]}>
      <Logo />
      qwerr
    </nav>
  )
}

