"use client"

import { FC, useState } from 'react'
import Toggler from './assets/Toggler'
import styles from './toggleBtn.module.scss'

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
    <div className={[
      styles[`toggle-wrapper`],
      styles[`${size}-toggle-wrapper`],
      styles[`${theme}-toggle-wrapper`],
      styles[`${isHover ? `${theme}-hover-toggle-wrapper` : ''}`],
      styles[`${isActive ? `${theme}-active-toggle-wrapper` : ''}`],
      styles[`${isDisabled && `disabled-toggle-wrapper`}`],
    ].join(' ')}>
      <input 
        type="checkbox"  
        className={[
          styles[`toggle-input`],
          styles[`${size}-toggle-input`],
        ].join(' ')}
        onClick={() => setToggler(!toggler)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        disabled={isDisabled}
      />

      <Toggler
       className={[
        styles[`toggler-svg`],
        styles[`${size}-toggler-svg`],
        styles[`${theme}-toggler-svg`],
        styles[`${toggler && 'clicked-toggler-svg'}`],
        styles[`${isDisabled && 'disabled-toggler-svg'}`],
      ].join(' ')}
      />
      
    </div>
  )
}

export default ToggleBtn
