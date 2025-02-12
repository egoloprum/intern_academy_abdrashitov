"use client"

import { FC, useState } from 'react'
import './toggleBtn.css'

interface ToggleBtnProps {
  size?: 'large' | 'medium' | 'small' | 'xSmall'
  disabled?: boolean
}

const ToggleBtn: FC<ToggleBtnProps> = ({
  size="medium",
  disabled=false
}) => {
  const [toggler, setToggler] = useState<boolean>(false)

  return (
    <label className="switch">
      <input 
        type="checkbox"  
        className=''
        onClick={() => setToggler(!toggler)}
        checked={toggler}
      />
      <span className="slider round"></span>
    </label>
  )
}

export default ToggleBtn
