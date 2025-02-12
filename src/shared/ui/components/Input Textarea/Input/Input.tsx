"use client"

import { FC, useState } from 'react'
import './input.css'
import Left from './assets/Left'
import Right from './assets/Right'

interface InputProps {
  size?: 'large' | 'medium' | 'small'
  value?: string
  rounded?: boolean
  disabled: boolean
  topLabel?: string
  bottomLabel?: string

  error?: boolean
}

const Input: FC<InputProps> = ({
  size="medium",
  value, 
  rounded,  
  disabled=false, 
  topLabel='label', 
  bottomLabel='This is a helper text',
  error=false
}) => {
  const [onActive, setOnActive] = useState<boolean>(false)
  const [onHover, setOnHover] = useState<boolean>(false)

  return (
    <div className='input-wrapper'>
      <label 
        className={`top-label top-${size}-label`}
      >
        {size} {topLabel}
      </label>
      <div 
        className={[
          'input-container',
          `${size}-container`,
          `${rounded && 'border-rounded-container'}`,
          `${onActive && 'input-active-container'}`,
          `${onHover && 'input-hover-container'}`,
          `${error && 'input-error-container'}`
        ].join(' ')}
      >
        <Left disabled={disabled} />
        <input
          className={[
            `input ${size}-input`,
            `${onHover && 'input-hover'}`,
            `${error && 'text-error'}`,
          ].join(' ')} 
          type="text" 
          value={value}
          placeholder={`${size} Input`}
          onFocus={() => setOnActive(true)}
          onBlur={() => setOnActive(false)}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          disabled={disabled}
        />
        <Right disabled={disabled} />
      </div>
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

export default Input
