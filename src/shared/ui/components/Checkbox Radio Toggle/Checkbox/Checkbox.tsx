"use client"

import { FC, useEffect, useState } from 'react'
import "./checkbox.css"
import Checked from './assets/Checked'
import UnChecked from './assets/UnChecked'
import Minus from './assets/Minus'
import Plus from './assets/Plus'

interface CheckboxProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  mode?: 'default' | 'minus' | 'plus'
  isClicked?: boolean
  isDisabled?: boolean
  className?: string
}

const Checkbox: FC<CheckboxProps> = ({
  size='medium',
  mode='default',
  isClicked=false,
  isDisabled=false,
  className
}) => {
  const [clicked, setClicked] = useState<boolean>(isClicked)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    console.log(clicked)
  }, [clicked])

  return (
    <div className={`input-wrapper ${size}-checkbox ${className}`}>
      <input
        className={[
          'input',
          `${size}-checkbox`
        ].join(' ')} 
        type="checkbox" 
        onClick={() => setClicked(!clicked)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={()  => setIsHover(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}

        disabled={isDisabled}
      />

      {clicked ? (
        mode === 'default' ? <Checked 
        className={`
          checkbox-svg 
          ${isHover && 'hover-checkbox-svg'} 
          ${isActive && 'active-checkbox-svg'} 
          ${isDisabled && 'disabled-checkbox-svg'} 
          ${size}-checkbox`} 
        />
         : mode === 'minus' ? <Minus 
        className={`
          checkbox-svg 
          ${isHover && 'hover-checkbox-svg'} 
          ${isActive && 'active-checkbox-svg'} 
          ${isDisabled && 'disabled-checkbox-svg'} 
          ${size}-checkbox`} 
        /> 
        : mode === 'plus' ? <Plus 
        className={`
          checkbox-svg 
          ${isHover && 'hover-checkbox-svg'} 
          ${isActive && 'active-checkbox-svg'} 
          ${isDisabled && 'disabled-checkbox-svg'} 
          ${size}-checkbox`} 
        /> : null
      ) : (
        <UnChecked 
        className={`
          checkbox-svg 
          ${isHover && 'hover-checkbox-svg'} 
          ${isActive && 'active-checkbox-svg'} 
          ${isDisabled && 'disabled-checkbox-svg'} 
          ${size}-checkbox`} 
        />
      )}
    </div>
  )
}

export default Checkbox
