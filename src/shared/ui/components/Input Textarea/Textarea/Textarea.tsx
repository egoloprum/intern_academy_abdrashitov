"use client"

import { FC, useState } from 'react'
import './textarea.css'

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
          `${isError && 'textarea-error'}`
        ].join(' ')}
        placeholder={`${size} text area`}
        disabled={isDisabled}
      >
      </textarea>
      <label 
        className={[
          'bottom-label', 
          `bottom-${size}-label`,
          `${isError && 'text-error'}`,
          `${isDisabled && 'text-disabled'}`,
        ].join(' ')}
      >
        {bottomLabel}
      </label>
    </div>
  )
}

export default Textarea
