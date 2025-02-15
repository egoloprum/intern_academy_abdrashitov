"use client"

import { FC, useState } from 'react'
import Left from './assets/Left'
import Right from './assets/Right'
import styles from './input.module.scss'

interface InputProps {
  size?: 'large' | 'medium' | 'small'
  rounded?: boolean
  disabled?: boolean
  topLabel?: string
  bottomLabel?: string
  error?: boolean
}

const Input: FC<InputProps> = ({
  size="medium",
  rounded,  
  disabled=false, 
  topLabel='label', 
  bottomLabel='This is a helper text',
  error=false,
}) => {
  const [onActive, setOnActive] = useState<boolean>(false)
  const [onHover, setOnHover] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState('')
  const [isRotated, setIsRotated] = useState(false)

  const handleRemoveValue = () => {
    setInputValue('')
    setIsRotated(true)

    setTimeout(() => {
      setIsRotated(false)
    }, 300)
  }

  return (
    <div className={styles['input-wrapper']}>
      <label className={[styles[`top-label`], styles[`top-${size}-label`]].join(' ')}>
        {size} {topLabel}
      </label>
      <section 
        className={[
          styles[`input-container`],
          styles[`${size}-container`],
          styles[`${rounded && 'border-rounded-container'}`],
          styles[`${onActive && 'input-active-container'}`],
          styles[`${onHover && 'input-hover-container'}`],
          styles[`${error && 'input-error-container'}`]
        ].join(' ')}
      >
        <Left disabled={disabled} />
        <input
          className={[
            styles[`input`],
            styles[`${size}-input`],
            styles[`${onHover && 'input-hover'}`],
            styles[`${error && 'text-error'}`]
          ].join(' ')} 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`${size} Input`}
          onFocus={() => setOnActive(true)}
          onBlur={() => setOnActive(false)}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          disabled={disabled}
        />
        <Right 
          className={[styles[`input-remove-svg`], styles[`${isRotated && 'rotate'}`]].join(' ')} 
          onClick={handleRemoveValue}  
          disabled={disabled} 
        />
      </section>

      <label 
        className={[
          styles[`bottom-label`],
          styles[`bottom-${size}-label`],
          styles[`${error && 'text-error'}`],
          styles[`${disabled && 'text-disabled'}`]
        ].join(' ')}
      >
        {bottomLabel}
      </label>
    </div>
  )
}

export default Input
