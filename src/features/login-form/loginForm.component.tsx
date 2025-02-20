"use client"

import { useState } from 'react'
import { Button } from '@/shared/ui/components/Button'
import { Input } from '@/shared/ui/components/Input Textarea/Input'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginValidator } from '@/app/validations/loginValidator';
import { signIn } from 'next-auth/react'

import Google from './assets/google.svg'
import PasswordShow from './assets/passwordShow.svg'
import PasswordHide from './assets/passwordHide.svg'

import styles from './loginForm.module.scss'

type LoginData = {
  email: string
  password: string 
}

const LoginForm = ({}) => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(LoginValidator),
  })
  const [passwordShow, setPasswordShow] = useState<boolean>(false)

  const onSubmit: SubmitHandler<LoginData> = async (data) => {

    const user = {
      email: data.email,
      password: data.password, 
    }
  
    const result = await signIn('Credentials', {
      redirect: false,
      ...user,
    })
  
    if (result?.error) {
      console.error('Authentication failed:', result.error)
      return
    }
  }

  const googleHandler = async () => {
    try {
      await signIn('google')
    }
    catch (error) {
      console.log(error)
    } 
  }

  return (
    <form 
      className={styles[`form`]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={styles[`form-label`]}>Авторизация</h3>

      <fieldset className={[styles[`form-element-1`], styles[`fieldset`]].join(' ')}>
        <Input 
          type='email'
          inputSize='large'
          placeholder='Электронная почта'
          className={[styles[`email-input`], styles['input']].join(' ')}
          error={errors.email ? true : false}
          topLabel=''
          bottomLabel={errors.email ? errors.email.message : ''}
          {...register("email")}
        />
        <Input 
          {...register("password")}
          type={passwordShow ? 'text' : 'password'}
          inputSize='large'
          placeholder='Пароль'
          className={[styles[`password-input`], styles['input']].join(' ')}
          error={errors.password ? true : false}
          topLabel=''
          bottomLabel={errors.password ? errors.password.message : ''}
        >
          { passwordShow ? (
            <PasswordHide className={styles[`password-svg`]} onClick={() => setPasswordShow(!passwordShow)} />
          ) : (
            <PasswordShow className={styles[`password-svg`]} onClick={() => setPasswordShow(!passwordShow)} />
          ) }
        </Input>
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
          Зарегистрироваться
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
          onClick={googleHandler}
        >
          <Google /> Войти с помощью Google
        </Button>
      </fieldset>
    </form>
  )
}

export { LoginForm }
