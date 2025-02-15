"use client"

import { FC } from 'react'
// import './button.css'
import styles from './button.module.scss'
import Left from './assets/Left'
import Right from './assets/Right'

interface ButtonProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  mode?: 'primary' | 'secondary' | 'clear' | 'critical' | 'critical-secondary'
  isRounded?: boolean 
  isMini?: boolean 
  isDisabled?: boolean

  isIconsNeeded?: boolean

  text?: string
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = ({
  size='large',
  mode='primary',
  isRounded=false,
  isMini=false,
  isDisabled=false,
  text='large button',
  isIconsNeeded=true,
  onClick,
  className
}) => {
  return (
    <button 
      className={[
        styles.button,
        `${styles[size + '-button']}`,
        `${styles[mode + '-button']}`,
        `${styles[isRounded ? 'rounded-button' : '']}`,
        `${styles[isMini ? 'mini-button' : '']}`,
        `${styles[isMini ? `mini-${size}-button` : '']}`,
        `${styles[isRounded ? 'no-icon-button' : '']}`,
        `${styles[`${className}`]}`
      ].join(' ')}
      onClick={onClick}
      disabled={isDisabled}
    >

    {isIconsNeeded && (
      <Left 
        className={`
          ${styles[`button-svg`]}
          ${styles[`${size}-button-svg`]}
          ${styles[`${mode}-button-svg`]}
          ${styles[`${isDisabled && 'disabled-button-svg'}`]}
        `} 
      />
    )}

      {!isMini && (
        <span 
          className={`${styles['button-text']}`}
        >
          {text}
        </span>
      )}

      {isIconsNeeded && (
        !isMini && (
          <Right 
            className={`
              ${styles[`button-svg`]}
              ${styles[`${size}-button-svg`]}
              ${styles[`${mode}-button-svg`]}
              ${styles[`${isDisabled && 'disabled-button-svg'}`]}
            `} 
          />
        )      
      )}



    </button>
  )
}

export default Button
