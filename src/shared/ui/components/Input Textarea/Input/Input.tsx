"use client"

import { forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small'
  rounded?: boolean
  topLabel?: string
  bottomLabel?: string
  error?: boolean
  className?: string
  type?: HTMLInputTypeAttribute
  children?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  inputSize = "medium",
  rounded,
  topLabel = 'label',
  bottomLabel = 'This is a helper text',
  error = false,
  className,
  type,
  children,
  ...rest
}, ref) => {
  return (
    <div className={[styles['input-wrapper'], className].join(' ')}>
      {topLabel.length ? (
        <label 
          className={[
            styles[`top-label`], 
            styles[`top-${inputSize}-label`]
          ].join(' ')}
        >
          {topLabel}
        </label>
      ) : null}

      <section 
        className={[
          styles[`input-container`],
          styles[`${inputSize}-container`],
          styles[`${rounded && 'border-rounded-container'}`],
          styles[`${error && 'input-error-container'}`],
        ].join(' ')}
      >
        <input
          className={[
            styles[`input`],
            styles[`${inputSize}-input`],
            styles[`${error && 'text-error'}`]
          ].join(' ')} 
          type={type} 
          ref={ref}
          {...rest}
        />

        {children}
      </section>

      {bottomLabel.length ? (
        <label 
          className={[
            styles[`bottom-label`],
            styles[`bottom-${inputSize}-label`],
            styles[`${error && 'text-error'}`],
          ].join(' ')}
        >
          {bottomLabel}
        </label>
      ) : null}
    </div>
  )
})
