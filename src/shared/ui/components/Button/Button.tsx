"use client"

import { FC } from 'react'
import './button.css'
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
  className
}) => {
  return (
    <button 
      className={[
        'button',
        `${size}-button`,
        `${mode}-button`,
        `${isRounded && 'rounded-button'}`,
        `${isMini && `mini-button mini-${size}-button`}`,
        `${className}`
      ].join(' ')}
      disabled={isDisabled}
    >

    {isIconsNeeded && (
      <Left 
        className={`
          button-svg 
          ${size}-button-svg 
          ${mode}-button-svg
          ${isDisabled && 'disabled-button-svg'}
        `} 
      />
    )}

      {!isMini && (
        <span 
          className={[
            'button-text'
          ].join(' ')}
        >
          {text}
        </span>
      )}

      {isIconsNeeded && (
        !isMini && (
          <Right 
            className={`
              button-svg 
              ${size}-button-svg 
              ${mode}-button-svg
              ${isDisabled && 'disabled-button-svg'}
            `} 
          />
        )      
      )}



    </button>
  )
}

export default Button
