"use client"

import { FC, useState } from 'react'
import './radioBtn.css'
import Checked from './assets/Checked'
import Unchecked from './assets/Unchecked'

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
    <div className={`input-wrapper ${size}-input-wrapper`}>
      <input 
        className={[
          'input-radio',
          `${size}-input-radio`,
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
          className={`
            radio-svg 
            ${size}-radio-svg
            ${isHover && 'hover-radio-svg'} 
            ${isActive && 'active-radio-svg'} 
            ${isDisabled && 'disabled-radio-svg'} 
          `} 
        /> : 
        <Unchecked 
          className={`
            radio-svg 
            ${size}-radio-svg
            ${isHover && 'hover-radio-svg'} 
            ${isActive && 'active-radio-svg'} 
            ${isDisabled && 'disabled-radio-svg'} 
          `} 
        />
      }
    </div>
  )
}

export default RadioBtn
