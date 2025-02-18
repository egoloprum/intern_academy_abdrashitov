import { LoginForm } from '@/features/login-form'
import { FC } from 'react'

import styles from './login.module.scss'

interface LoginProps {
  
}

export const Login: FC<LoginProps> = ({}) => {
  return (
    <main className={styles[`login-main`]}>
      <LoginForm />
    </main>
  )
}


