"use client"

import { FC, TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'large' | 'medium' | 'small' | 'xSmall'

  isDisabled?: boolean
  isError?: boolean

  topLabel?: string
  bottomLabel?: string

  className?: string
}

const Textarea: FC<TextareaProps> = ({
  size='medium',
  isDisabled=false,
  isError=false, 
  topLabel='label', 
  bottomLabel='This is a helper text',
  className,
  ...rest
}) => {
  return (
    <div 
      className={
        [styles[`textarea-container`], 
        className].join(' ')
      }
    >
      <label 
        className={[
          styles[`top-label`],
          styles[`top-${size}-label`]
        ].join(' ')}
      >
        {topLabel}
      </label>
      <textarea 
        className={[
          styles[`textarea`],
          styles[`${size}-textarea`],
          styles[`${isError && 'textarea-error'}`]
        ].join(' ')}
        disabled={isDisabled}
        {...rest}
      >
      </textarea>
      <label 
        className={[
          styles[`bottom-label`],
          styles[`bottom-${size}-label`],
          styles[`${isError && 'text-error'}`],
          styles[`${isDisabled && 'text-disabled'}`]
        ].join(' ')}
      >
        {bottomLabel}
      </label>
    </div>
  )
}

export default Textarea
