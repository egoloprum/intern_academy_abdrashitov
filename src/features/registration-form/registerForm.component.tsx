"use client"

import { useEffect, useState } from 'react'

import { Input } from '@/shared/ui/components/Input Textarea/Input'
import { Button } from '@/shared/ui/components/Button'

import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterValidator } from '@/app/validations/loginValidator'
import { zodResolver } from '@hookform/resolvers/zod'

import PasswordShow from './assets/passwordShow.svg'
import PasswordHide from './assets/passwordHide.svg'

import styles from './registerForm.module.scss'
import { usePhoneInput } from '@/app/hooks/phoneNumber'
import { createUser } from '@/app/lib/db'
import { signIn } from 'next-auth/react'

type RegisterData = {
  username: string 
  telephone: string 
  email: string
  password: string 
  repeatPassword: string 
}

const RegisterForm = ({}) => {

  const { register, handleSubmit, formState: { errors }, trigger } = useForm<RegisterData>({
      resolver: zodResolver(RegisterValidator),
    })

  const [passwordShow, setPasswordShow] = useState<boolean>(false)
  const [repeatPasswordShow, setRepeatPasswordShow] = useState<boolean>(false)

  const { phone, handleChange } = usePhoneInput()

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {

    const user = {
      id: crypto.randomUUID(),
      username: data.username,
      telephone: data.telephone,
      email: data.email,
      password: data.password, 
    } as User

    try {
      const isCreatedUser = await createUser(user)

      if (!isCreatedUser) {
        return
      }

      const result = await signIn('credentials', {
        redirect: true,
        ...user
      })

    } catch (error) {
      throw error
    }
  }

  return (
    <form 
      className={styles[`form`]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={styles[`form-label`]}>Регистрация</h3>

      <fieldset className={[styles[`form-element`]].join(' ')}>
        <Input 
          type='text'
          inputSize='large'
          placeholder='ФИО'
          className={[styles[`username-input`], styles['input']].join(' ')}
          error={!!errors.username}
          topLabel=''
          bottomLabel={errors.username ? errors.username.message : ''}
          {...register("username")}
          onChange={() => trigger("username")}
          required
        />

          <Input 
            type='text'
            inputSize='large'
            placeholder='Номер телефона'
            className={[styles[`telephone-input`], styles['input']].join(' ')}
            error={!!errors.telephone}
            topLabel=''
            bottomLabel={errors.telephone ? errors.telephone.message : ''}
            {...register("telephone")}
            value={phone} 
            onChange={(e) => {handleChange(e); trigger("telephone")}}
          />


        <Input 
          type='email'
          inputSize='large'
          placeholder='Электронная почта'
          className={[styles[`email-input`], styles['input']].join(' ')}
          error={!!errors.email}
          topLabel=''
          bottomLabel={errors.email ? errors.email.message : ''}
          {...register("email")}
          onChange={() => trigger("email")}
        />

        <Input 
          {...register("password")}
          type={passwordShow ? 'text' : 'password'}
          inputSize='large'
          placeholder='Пароль'
          className={[styles[`password-input`], styles['input']].join(' ')}
          error={!!errors.password}
          topLabel=''
          bottomLabel={errors.password ? errors.password.message : ''}
          onChange={() => trigger("password")}
        >
          { passwordShow ? (
            <PasswordHide className={styles[`password-svg`]} onClick={() => setPasswordShow(!passwordShow)} />
          ) : (
            <PasswordShow className={styles[`password-svg`]} onClick={() => setPasswordShow(!passwordShow)} />
          ) }
        </Input>

        <Input 
          {...register("repeatPassword")}
          type={repeatPasswordShow ? 'text' : 'password'}
          inputSize='large'
          placeholder='Повторить пароль'
          className={[styles[`password-input`], styles['input']].join(' ')}
          error={!!errors.repeatPassword}
          topLabel=''
          bottomLabel={errors.repeatPassword ? errors.repeatPassword.message : ''}
          onChange={() => trigger("repeatPassword")}
        >
          { repeatPasswordShow ? (
            <PasswordHide className={styles[`password-svg`]} onClick={() => setRepeatPasswordShow(!repeatPasswordShow)} />
          ) : (
            <PasswordShow className={styles[`password-svg`]} onClick={() => setRepeatPasswordShow(!repeatPasswordShow)} />
          ) }
        </Input>

        <Button 
          type='submit' 
          size='large'
          mode='primary'
          className={[styles['button']].join(' ')}
          // disabled={errors ? true : false}
        >
          Зарегистрироваться
        </Button>
        <Button 
          type='button' 
          size='large'
          mode='secondary'
          className={[styles['button']].join(' ')}
          href='/login'
        >
          Войти
        </Button>
      </fieldset>
    </form>
  )
}

export { RegisterForm }
