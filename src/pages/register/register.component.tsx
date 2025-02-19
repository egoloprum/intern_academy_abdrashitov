import { RegisterForm } from '@/features/registration-form'
import styles from './register.module.scss'

export const Register = ({}) => {
  return(
    <main className={styles[`register-main`]}>
      <RegisterForm />
    </main>
  )
}


