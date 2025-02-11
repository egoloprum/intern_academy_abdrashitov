"use client"

import { FC, useState } from 'react'
import './styles/radioBtn.css'

interface RadioBtnProps {
  size?: 'large' | 'medium' | 'small' | 'xSmall'
  disabled?: boolean
}

const RadioBtn: FC<RadioBtnProps> = ({
  size='medium',
  disabled=false
}) => {
  const [toggler, setToggler] = useState<boolean>(false)
  const [onHover, setOnHover] = useState<boolean>(false)
  const [onActive, setOnActive] = useState<boolean>(false)

  return (
    <input 
      type="radio"
      className={[
        'radioBtn',
        `radioBtn-${size}`,
        `${onHover && ''}`,
        `${onActive && ''}`,
        `${disabled && ''}`
      ].join(' ')}
      disabled={disabled}
      onClick={() => setToggler(!toggler)} 
      checked={toggler}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onFocus={() => setOnActive(true)}
      onBlur={() => setOnActive(false)}
    />
  )
}

export default RadioBtn
