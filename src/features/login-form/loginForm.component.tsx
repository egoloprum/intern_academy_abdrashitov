"use client"

import { Button } from '@/shared/ui/components/Button'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import Google from './assets/google.svg'

import styles from './loginForm.module.scss'
import { Input } from '@/shared/ui/components/Input Textarea/Input'

interface LoginForm {
  
}

const LoginForm: FC<LoginForm> = ({}) => {

  const [data, setData] = useState("")

  return (
    <form 
      className={styles[`form`]}
    >
      <h3 className={styles[`h3`]}>Авторизация</h3>

      <fieldset className={[styles[`form-element-1`], styles[`fieldset`]].join(' ')}>
        <Input 
          inputSize='large'
          placeholder='Электронная почта'
          className={[styles[`email-input`], styles['input']].join(' ')}
          topLabel=''
          bottomLabel=''
        />
        <Input 
          inputSize='large'
          placeholder='Пароль'
          className={[styles[`password-input`], styles['input']].join(' ')}
          topLabel=''
          bottomLabel=''
        />
        <Button 
          type='submit' 
          size='large'
          className={[styles[`login-button`], styles['button']].join(' ')}
        >
          Войти
        </Button>
        <Button 
          type='button' 
          size='large'
          mode='secondary'
          className={[styles[`register-button`], styles['button']].join(' ')}
          href='/register'
        >
          Заригестрироваться
        </Button>
      </fieldset>

      <fieldset className={[styles[`form-element-2`], styles[`fieldset`]].join(' ')}>
        <span></span>
        <span>или</span>
        <span></span>
      </fieldset>

      <fieldset className={[styles[`form-element-3`], styles[`fieldset`]].join(' ')}>
        <Button 
          type='button' 
          size='large'
          className={[styles[`google-button`], styles['button']].join(' ')}
        >
          <Google /> Войти с помощью Google
        </Button>
      </fieldset>

    </form>
  )
}

export { LoginForm }
