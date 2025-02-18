"use client"

import { FC, InputHTMLAttributes, useState } from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small'
  rounded?: boolean
  topLabel?: string
  bottomLabel?: string
  error?: boolean
  className?: string 
  placeholder?: string 

}

export const Input: FC<InputProps> = ({
  inputSize="medium",
  rounded,  
  disabled=false, 
  topLabel='label', 
  bottomLabel='This is a helper text',
  error=false,
  className,
  placeholder,
  ...rest
}) => {
  const [onActive, setOnActive] = useState<boolean>(false)
  const [onHover, setOnHover] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState('')

  return (
    <div className={[styles['input-wrapper'], className].join(' ')}>
      { topLabel.length ? (
        <label 
          className={[
            styles[`top-label`], 
            styles[`top-${inputSize}-label`]
          ].join(' ')}
        >
          {topLabel}
        </label>
      ) : null }

      <section 
        className={[
          styles[`input-container`],
          styles[`${inputSize}-container`],
          styles[`${rounded && 'border-rounded-container'}`],
          styles[`${onActive && 'input-active-container'}`],
          styles[`${onHover && 'input-hover-container'}`],
          styles[`${error && 'input-error-container'}`],
        ].join(' ')}
      >
        <input
          className={[
            styles[`input`],
            styles[`${inputSize}-input`],
            styles[`${onHover && 'input-hover'}`],
            styles[`${error && 'text-error'}`]
          ].join(' ')} 
          type="text" 
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setOnActive(true)}
          onBlur={() => setOnActive(false)}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          disabled={disabled}
          {...rest}
        />
      </section>

      { bottomLabel.length ? (
        <label 
          className={[
            styles[`bottom-label`],
            styles[`bottom-${inputSize}-label`],
            styles[`${error && 'text-error'}`],
            styles[`${disabled && 'text-disabled'}`]
          ].join(' ')}
        >
          {bottomLabel}
        </label>
      ) : null}

    </div>
  )
}

