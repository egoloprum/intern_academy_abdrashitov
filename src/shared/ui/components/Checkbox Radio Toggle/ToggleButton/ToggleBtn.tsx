"use client"

import { FC, useState } from 'react'
import './toggleBtn.css'
import Toggler from './assets/Toggler'

interface ToggleBtnProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  isDisabled?: boolean
  theme?: "light" | "dark"
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  size="medium",
  isDisabled=false,
  theme="dark"
}) => {
  const [toggler, setToggler] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div className={`
      toggle-wrapper 
      ${size}-toggle-wrapper
      ${theme}-toggle-wrapper
      ${isHover ? `${theme}-hover-toggle-wrapper` : ''} 
      ${isActive ? `${theme}-active-toggle-wrapper` : ''}
      ${isDisabled && `disabled-toggle-wrapper`}
    `}>
      <input 
        type="checkbox"  
        className={`toggle-input ${size}-toggle-input`}
        onClick={() => setToggler(!toggler)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        disabled={isDisabled}
      />

      <Toggler
       className={`
        toggler-svg
        ${size}-toggler-svg
        ${theme}-toggler-svg
        ${toggler && 'clicked-toggler-svg'}
        ${isDisabled && 'disabled-toggler-svg'}
      `}
      />
      
    </div>
  )
}

export default ToggleBtn
