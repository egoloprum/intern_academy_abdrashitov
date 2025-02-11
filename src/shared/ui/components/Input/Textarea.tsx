"use client"

import { FC, useState } from 'react'
import './textarea.css'

interface TextareaProps {
  size?: 'large' | 'medium' | 'small' | 'xSmall'
  rounded?: boolean

  disabled?: boolean
  error?: boolean

  topLabel?: string
  bottomLabel?: string
}

const Textarea: FC<TextareaProps> = ({
  rounded=false,
  size='medium',
  disabled=false,
  error=false, 
  topLabel='label', 
  bottomLabel='This is a helper text'
}) => {
  const [onActive, setOnActive] = useState<boolean>(false)
  const [onHover, setOnHover] = useState<boolean>(false)

  return (
    <div 
      className={`textarea-container`}
    >
      <label 
        className={
          `top-label top-${size}-label`
        }
      >
        {size} {topLabel}
      </label>
      <textarea 
        className={[
          'textarea',
          `${size}-textarea`,
          `${rounded && 'border-rounded-textarea'}`,
          `${onActive && 'textarea-active'}`,
          `${onHover && 'textarea-hover'}`,
          `${error && 'textarea-error'}`
        ].join(' ')}
        placeholder={`${size} text area`}
        onFocus={() => setOnActive(true)}
        onBlur={() => setOnActive(false)}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        disabled={disabled}
      >
      </textarea>
      <label 
        className={[
          'bottom-label', 
          `bottom-${size}-label`,
          `${error && 'text-error'}`,
          `${disabled && 'text-disabled'}`,
        ].join(' ')}
      >
        {bottomLabel}
      </label>
    </div>
  )
}

export default Textarea
