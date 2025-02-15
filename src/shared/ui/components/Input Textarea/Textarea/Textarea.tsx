"use client"

import { FC } from 'react'
import styles from './textarea.module.scss'

interface TextareaProps {
  size?: 'large' | 'medium' | 'small' | 'xSmall'

  isDisabled?: boolean
  isError?: boolean

  topLabel?: string
  bottomLabel?: string
}

const Textarea: FC<TextareaProps> = ({
  size='medium',
  isDisabled=false,
  isError=false, 
  topLabel='label', 
  bottomLabel='This is a helper text'
}) => {
  return (
    <div 
      className={styles[`textarea-container`]}
    >
      <label 
        className={[
          styles[`top-label`],
          styles[`top-${size}-label`]
        ].join(' ')}
      >
        {size} {topLabel}
      </label>
      <textarea 
        className={[
          styles[`textarea`],
          styles[`${size}-textarea`],
          styles[`${isError && 'textarea-error'}`]
        ].join(' ')}
        placeholder={`${size} text area`}
        disabled={isDisabled}
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
