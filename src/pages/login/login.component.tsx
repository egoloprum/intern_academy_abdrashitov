import { LoginForm } from '@/features/login-form'

import styles from './login.module.scss'

export const Login= ({}) => {
  return (
    <main className={styles[`login-main`]}>
      <LoginForm />
    </main>
  )
}


