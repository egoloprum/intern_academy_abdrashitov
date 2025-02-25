"use client"

import { FC, InputHTMLAttributes, useRef, useState } from 'react'
import Ball from './assets/ball.svg'
import styles from './toggleBtn.module.scss'

interface ToggleBtnProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'large' | 'medium' | 'small' | 'xs'
  isDisabled?: boolean
  label?: string
  className?: string 
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  inputSize="medium",
  isDisabled=false,
  label,
  className,
  ...rest
}) => {
  const [isToggled, setisToggled] = useState<string>("")
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  
  const checkboxRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (checkboxRef.current) {
      setisToggled(checkboxRef.current.checked ? "light" : "dark")
    }
  }

  return (
    <div 
      className={[
        styles[`toggle-container`],
        className
      ].join(' ')}
    >
      <label
        className={[
          styles[`toggle-wrapper`],
          styles[`${inputSize}-toggle-wrapper`],
          styles[`${isDisabled && `disabled-toggle-wrapper`}`],
          styles[`${isToggled}-toggle-wrapper`],
          styles[`${isHover && `${isToggled}-hover-toggle-wrapper`}`],
          styles[`${isActive && `${isToggled}-active-toggle-wrapper`}`],
        ].join(' ')}
      >
        <input 
          type="checkbox"
          className={[
            styles[`toggle-input`],
            styles[`${inputSize}-toggle-input`],
          ].join(' ')}
          onClick={handleClick}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          disabled={isDisabled}
          ref={checkboxRef}
          {...rest}
        />

        <Ball
        className={[
          styles[`toggler-svg`],
          styles[`${inputSize}-toggler-svg`],
        ].join(' ')}
        />
      </label>
      <label htmlFor="">
        {label}
      </label>
    </div>
  )
}

export default ToggleBtn
