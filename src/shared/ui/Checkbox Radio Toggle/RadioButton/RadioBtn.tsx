"use client"

import { FC, useState } from 'react'
import Checked from './assets/Checked'
import Unchecked from './assets/Unchecked'
import styles from './radioBtn.module.scss'

interface RadioBtnProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  isDisabled?: boolean
}

const RadioBtn: FC<RadioBtnProps> = ({
  size='medium',
  isDisabled=false
}) => {

  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  
  return (
    <div 
      className={[
        styles[`input-wrapper`],
        styles[`${size}-input-wrapper`]
      ].join(' ')}
    >
      <input 
        className={[
          styles[`input-radio`],
          styles[`${size}-input-radio`],
        ].join(' ')}
        type="radio"
        onClick={() => setIsClicked(!isClicked)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={()  => setIsHover(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        disabled={isDisabled}
      />

      { isClicked ?
        <Checked 
          className={[
            styles[`radio-svg`],
            styles[`${size}-radio-svg`],
            styles[`${isHover ? 'hover-radio-svg' : ''}`],
            styles[`${isActive ? 'active-radio-svg' : ''}`],
            styles[`${isDisabled ? 'disabled-radio-svg' : ''}`],
          ].join(' ')} 
        /> : 
        <Unchecked 
          className={[
            styles[`radio-svg`],
            styles[`${size}-radio-svg`],
            styles[`${isHover ? 'hover-radio-svg' : ''}`],
            styles[`${isActive ? 'active-radio-svg' : ''}`],
            styles[`${isDisabled ? 'disabled-radio-svg' : ''}`],
          ].join(' ')} 
        />
      }
    </div>
  )
}

export default RadioBtn
