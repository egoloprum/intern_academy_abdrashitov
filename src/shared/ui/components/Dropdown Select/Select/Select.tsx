"use client"

import { FC, useEffect, useRef, useState } from 'react'
import IconSelect from './assets/IconSelect'
import Button from '../../Button/Button'
import styles from './select.module.scss'

interface SelectProps {
  size?: 'large' | 'medium' | 'small' 
  elements?: string[]
  placeholder?: string 
  topLabel?: string 
}

const Select: FC<SelectProps> = ({
  size='medium',
  elements = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвертый вариант', 'Пятый вариант'],
  placeholder='Dropdown',
  topLabel="Top Label",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<string>(placeholder)
  const dropdownListRef = useRef<HTMLUListElement | null>(null)
  const [dropdownHeight, setDropdownHeight] = useState<number>(0)

  useEffect(() => {
    if (isOpen && dropdownListRef.current) {
      const elementHeight = dropdownListRef.current.children[0]?.clientHeight || 0
      setDropdownHeight(elementHeight * Math.min(elements.length, 4))
    }
  }, [isOpen, elements])

  return (
    <div className={styles[`select-wrapper`]} id='select-wrapper'>
      <label
        className={[styles[`${size}-select-text`], styles[`select-label`]].join(' ')} 
        htmlFor="#select-wrapper"
      >
          {topLabel}
      </label>
      <button 
        className={[styles[`select-opener`], styles[`${isOpen && 'open-select-opener'}`]].join(' ')}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={[
          styles[`select-text`],
          styles[`${size}-select-text`],
          styles[`${isOpen && 'open-select-text'}`]
        ].join(' ')}>{selectValue}</span>
        <IconSelect className={[styles[`select-svg`], styles[`${size}-select-svg`]].join(' ')} />
      </button>

      <ul 
        className={styles[`select-list`]} 
        style={{ opacity: isOpen ? `1` : '0', maxHeight: dropdownHeight }}
        ref={dropdownListRef}
      >
        {elements.map((element, index) => (
          <li key={index} className={styles[`select-element`]} >
            <Button 
              text={element}
              size={size}
              mode='clear'
              className={styles['select-button']}
              onClick={() => {setIsOpen(false); setSelectValue(element)}}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
