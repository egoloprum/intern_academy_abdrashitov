"use client"

import { FC, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import './nestedCheckbox.css'

interface NestedCheckboxProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
}

const NestedCheckbox: FC<NestedCheckboxProps> = ({
  size="medium"
}) => {
  const [isRetracted, setIsRetracted] = useState<boolean>(false)

  return (
    <ul className='nested-wrapper'>
      <li 
        className='parent-item'
        onClick={() => setIsRetracted(!isRetracted)}
      >
        <Checkbox size={size} isClicked={true} mode={ isRetracted ? 'plus' : 'minus' } className={`list-retracter`}  />
        <span className={`${size}-nested-text`}>Одежда</span>
      </li>
      <ul className={`nested-list ${isRetracted && 'nested-list-hide'} `}>
        <li className='nested-item'>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={`${size}-nested-text`}>Куртки</span>
        </li>
        <li className='nested-item'>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={`${size}-nested-text`}>Брюки</span>
        </li>
        <li className='nested-item'>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={`${size}-nested-text`}>Шорты</span>
        </li>
      </ul>
    </ul>
  )
}

export default NestedCheckbox
