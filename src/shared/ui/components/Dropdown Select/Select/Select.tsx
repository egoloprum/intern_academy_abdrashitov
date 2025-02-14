"use client"

import { FC, useEffect, useRef, useState } from 'react'
import "./select.css"
import IconSelect from './assets/IconSelect'
import Button from '../../Button/Button'

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
    <div className={`select-wrapper`} id='select-wrapper'>
      <label
        className={`${size}-select-text select-label`} 
        htmlFor="#select-wrapper"
      >
          {topLabel}
      </label>
      <button 
        className={`select-opener ${isOpen && 'open-select-opener'}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={`select-text ${size}-select-text ${isOpen && 'open-select-text'}`}>{selectValue}</span>
        <IconSelect className={`select-svg ${size}-select-svg`} />
      </button>

      <ul 
        className={`select-list`} 
        style={{ opacity: isOpen ? `1` : '0', maxHeight: dropdownHeight }}
        ref={dropdownListRef}
      >
        {elements.map((element, index) => (
          <li key={index} className={`select-element`} >
            <Button 
              text={element}
              size={size}
              mode='clear'
              className='select-button'
              onClick={() => {setIsOpen(false); setSelectValue(element)}}
            />
          </li>
        ))}
      </ul>

    </div>

  )
}

export default Select
