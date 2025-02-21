"use client"

import { FC, useState } from 'react'
import Checked from './assets/Checked'
import UnChecked from './assets/UnChecked'
import Minus from './assets/Minus'
import Plus from './assets/Plus'
import styles from "./checkbox.module.scss"

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

  return (
    <div className={[
      styles[`input-wrapper`],
      styles[`${size}-checkbox`], 
      styles[`${className}`], 
      ].join(' ')}
    >
      <input
        className={[
          styles[`input`],
          styles[`${size}-checkbox`],
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
        className={[
          styles[`checkbox-svg`],
          styles[`${isHover ? 'hover-checkbox-svg' : ''}`],
          styles[`${isActive ? 'active-checkbox-svg' : ''}`],
          styles[`${isDisabled ? 'disabled-checkbox-svg' : ''}`],
          styles[`${size}-checkbox`],
        ].join(' ')} 
        />
        : mode === 'minus' ? <Minus 
        className={[
          styles[`checkbox-svg`],
          styles[`${isHover ? 'hover-checkbox-svg' : ''}`],
          styles[`${isActive ? 'active-checkbox-svg' : ''}`],
          styles[`${isDisabled ? 'disabled-checkbox-svg' : ''}`],
          styles[`${size}-checkbox`],
        ].join(' ')} 
        /> 
        : mode === 'plus' ? <Plus 
        className={[
          styles[`checkbox-svg`],
          styles[`${isHover ? 'hover-checkbox-svg' : ''}`],
          styles[`${isActive ? 'active-checkbox-svg' : ''}`],
          styles[`${isDisabled ? 'disabled-checkbox-svg' : ''}`],
          styles[`${size}-checkbox`],
        ].join(' ')} 
        /> : null
      ) : (
        <UnChecked 
        className={[
          styles[`checkbox-svg`],
          styles[`${isHover ? 'hover-checkbox-svg' : ''}`],
          styles[`${isActive ? 'active-checkbox-svg' : ''}`],
          styles[`${isDisabled ? 'disabled-checkbox-svg' : ''}`],
          styles[`${size}-checkbox`],
        ].join(' ')} 
        />
      )}
    </div>
  )
}

export default Checkbox
