import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'

import { LanguageToggler } from '@/features/language-toggler'
import { LogoutBtn } from '@/features/logout-button'

import Logo from './assets/logo.svg' 
import styles from './navbar.module.scss'



export const Navbar = async ({}) => {
  const session = await getServerSession(authOptions)

  return (
    <nav className={styles[`navbar`]}>
      <Logo className={styles[`logo`]} />
      <div className={styles[`${session ? 'open-element' : 'closed-element'}`]}>
        <LanguageToggler className={styles[`language-toggler`]} />
        { session && <LogoutBtn /> }
      </div>
    </nav>
  )
}

