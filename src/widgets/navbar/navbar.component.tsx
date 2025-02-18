import { FC } from 'react'
import Logo from './assets/logo.svg' 
import styles from './navbar.module.scss'
import { LanguageToggler } from '@/features/language-toggler'

interface NavbarProps {
  
}

export const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className={styles[`navbar`]}>
      <Logo className={styles[`logo`]} />
      <LanguageToggler className={styles[`language-toggler`]} />
    </nav>
  )
}

