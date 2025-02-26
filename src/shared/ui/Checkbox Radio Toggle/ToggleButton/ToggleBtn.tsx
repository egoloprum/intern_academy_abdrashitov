"use client"

import { FC, InputHTMLAttributes, useRef } from 'react'
import Ball from './assets/ball.svg'
import styles from './toggleBtn.module.scss'

interface ToggleBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small' | 'xs'
  isDisabled?: boolean
  label?: string
  className?: string 
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  inputSize="medium",
  isDisabled=false,
  label,
  className,
  ...rest
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null)

  return (
    <div 
      className={[
        styles[`toggle-container`],
      ].join(' ')}
    >
      <label
        className={[
          styles[`toggle-wrapper`],
          styles[`${inputSize}-toggle-wrapper`],
          styles[`${isDisabled && `disabled-toggle-wrapper`}`],
        ].join(' ')}
        htmlFor='checkbox'
      >
        <input 
          type="checkbox"
          id='checkbox'
          className={[
            styles[`toggle-input`],
            styles[`${inputSize}-toggle-input`],
            className
          ].join(' ')}
          disabled={isDisabled}
          ref={checkboxRef}
          {...rest}
        />

        <Ball
        className={[
          styles[`toggler-svg`],
          styles[`${inputSize}-toggler-svg`],
        ].join(' ')}
        />
      </label>
      <label htmlFor="">
        {label}
      </label>
    </div>
  )
}

export default ToggleBtn
