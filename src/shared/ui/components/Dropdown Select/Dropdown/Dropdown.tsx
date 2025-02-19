"use client"

import { FC, useEffect, useRef, useState } from 'react'
import styles from './dropdown.module.scss'
import { Button } from '../../Button'

interface DropdownProps {
  size?: 'large' | 'medium' | 'small'
  elements?: string[]
  isDisabled?: boolean
}

const Dropdown: FC<DropdownProps> = ({
  size = 'medium',
  elements = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвертый вариант', 'Пятый вариант'],
  isDisabled=false
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownListRef = useRef<HTMLUListElement | null>(null)
  const [dropdownHeight, setDropdownHeight] = useState<number>(0)

  useEffect(() => {
    if (isOpen && dropdownListRef.current) {
      const elementHeight = dropdownListRef.current.children[0]?.clientHeight || 0
      setDropdownHeight(elementHeight * Math.min(elements.length, 4))
    }
  }, [isOpen, elements])

  return (
    <div className={[
        styles['dropdown-wrapper']
      ].join(' ')}>
      <Button 
        size={size}
        mode='secondary'
        onClick={() => setIsOpen(prev => !prev)}
        disabled={isDisabled}
      >
        Dropdown Button
      </Button>
      
      <ul 
        className={styles[`dropdown-list`]} 
        style={{ opacity: isOpen ? `1` : '0', maxHeight: dropdownHeight }}
        ref={dropdownListRef}
      >
        {elements.map((element, index) => (
          <li key={index} className={styles[`dropdown-element`]}>
            <Button 
              size={size}
              mode='clear'
              className={styles['dropdown-button']}
              onClick={() => setIsOpen(false)}
            >
              {element}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
