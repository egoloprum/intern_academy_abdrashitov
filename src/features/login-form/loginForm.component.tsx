"use client"

import { FC, useState } from 'react'
import { Button } from '@/shared/ui/components/Button'
import { Input } from '@/shared/ui/components/Input Textarea/Input'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginValidator } from '@/app/validations/loginValidator';

import Google from './assets/google.svg'
import PasswordShow from './assets/passwordShow.svg'
import PasswordHide from './assets/passwordHide.svg'

import styles from './loginForm.module.scss'

interface LoginForm {
  
}

type LoginData = {
  email: string
  password: string 
}

const LoginForm: FC<LoginForm> = ({}) => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(LoginValidator),
  });
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data)

  const [passwordShow, setPasswordShow] = useState<boolean>(false)

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
