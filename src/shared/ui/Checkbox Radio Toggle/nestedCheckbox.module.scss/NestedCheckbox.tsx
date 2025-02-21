"use client"

import { FC, useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import styles from "./nestedCheckbox.module.scss"

interface NestedCheckboxProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
}

const NestedCheckbox: FC<NestedCheckboxProps> = ({
  size="medium"
}) => {
  const [isRetracted, setIsRetracted] = useState<boolean>(false)

  return (
    <ul className={`${styles['nested-wrapper']}`}>
      <li 
        className={`${styles['parent-item']}`}
        onClick={() => setIsRetracted(!isRetracted)}
      >
        <Checkbox size={size} isClicked={true} mode={ isRetracted ? 'plus' : 'minus' } 
          className={`${styles['list-retracter']}`}  
        />
        <span className={styles[`${size}-nested-text`]}>Одежда</span>
      </li>
      <ul className={[
        styles[`nested-list`],
        styles[`${isRetracted ? 'nested-list-hide' : ''}`],
        ].join(' ')}
      >
        <li className={`${styles['nested-item']}`}>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={styles[`${size}-nested-text`]}>Куртки</span>
        </li>
        <li className={`${styles['nested-item']}`}>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={styles[`${size}-nested-text`]}>Брюки</span>
        </li>
        <li className={`${styles['nested-item']}`}>
          <Checkbox size={size} isDisabled={isRetracted} />
          <span className={styles[`${size}-nested-text`]}>Шорты</span>
        </li>
      </ul>
    </ul>
  )
}

export default NestedCheckbox
