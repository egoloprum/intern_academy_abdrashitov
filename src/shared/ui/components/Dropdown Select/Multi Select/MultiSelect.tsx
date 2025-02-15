"use client"

import { FC, useEffect, useRef, useState } from 'react'
import IconSelect from '../Select/assets/IconSelect'
import Button from '../../Button/Button'
import IconSearch from './assets/IconSearch'
import IconRemove from './assets/IconRemove'
import SelectedList from './components/SelectedList'
import styles from './styles/multiSelect.module.scss'

interface MultiSelectProps {
  size?: 'large' | 'medium' | 'small' 
  elements?: string[]
  placeholder?: string 
  topLabel?: string 
}

const MultiSelect: FC<MultiSelectProps> = ({
  size='medium',
  elements = ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвертый вариант', 'Пятый вариант'],
  placeholder='Dropdown',
  topLabel="Top Label",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string[]>([])

  const [currentElements, setCurrentElements] = useState<string[]>(elements)
  const [searchValue, setSearchValue] = useState<string>("")

  const dropdownListRef = useRef<HTMLUListElement | null>(null)
  const searchRef = useRef<HTMLDivElement | null>(null)
  const [dropdownHeight, setDropdownHeight] = useState<number>(0)

  const selectHandler = (element: string) => {
    setSelectedValue(prevSelected => [...prevSelected, element])
    setCurrentElements(prevCurrent => prevCurrent.filter(item => item !== element))
  }

  const removeHandler = () => {
    setSelectedValue([])
    setCurrentElements(elements)
  }

  useEffect(() => {
    if (isOpen && dropdownListRef.current && searchRef.current) {
      const elementHeight = dropdownListRef.current.children[1]?.clientHeight || 0
      const searchHeight = searchRef.current.clientHeight || 0
      setDropdownHeight(elementHeight * Math.min(currentElements.length, 4) + searchHeight)
    }
  }, [isOpen, currentElements])

  useEffect(() => {
    const filteredElements = elements.filter(element => 
      !selectedValue.includes(element)
    )

    if (searchValue) {
      const searchFilteredElements = filteredElements.filter(element =>
        element.toLowerCase().includes(searchValue.toLowerCase())
      )
      setCurrentElements(searchFilteredElements)
    } else {
      setCurrentElements(filteredElements)
    }
  }, [searchValue, elements, selectedValue])


  return (
    <div className={styles['multi-select-wrapper']}>
      <label
        className={[styles[`${size}-multi-select-text`], styles[`multi-select-label`]].join(' ')} 
        htmlFor="#multi-select-wrapper"
      >
          {topLabel}
      </label>
      <button 
        className={[
          styles[`multi-select-opener`],
          styles[`${isOpen && 'multi-open-select-opener'}`],
          styles[`${selectedValue.length && 'selected-opener'}`]
        ].join(' ')}
        onClick={() => setIsOpen(prev => !prev)}
      >
        { selectedValue.length ? (
          <SelectedList 
            selectedValue={selectedValue} 
            setCurrentElements={setCurrentElements}
            setSelectedValue={setSelectedValue}
            size={size} 
            className={styles['selected-list']}
          />
        ) : (
          <span 
            className={[
              styles[`multi-select-text`],
              styles[`${size}-multi-select-text`],
              styles[`${isOpen && 'open-multi-select-text'}`]
            ].join(' ')}
          >{placeholder}</span>
        )}
        <IconRemove 
          className={[
            styles[`multi-select-svg`],
            styles[`multi-select-remove-svg`],
            styles[`${size}-multi-select-svg`],
            styles[`${selectedValue.length && 'selected-svg'}`],
          ].join(' ')} 
          onClick={removeHandler} 
        />
        <IconSelect className={[
          styles[`multi-select-dropper-svg`],
          styles[`${size}-multi-select-svg`],
          styles[`${isOpen && 'rotated-svg'}`],
        ].join(' ')} />
      </button>

      <ul 
        className={styles[`multi-select-list`]} 
        style={{ opacity: isOpen ? `1` : '0', maxHeight: dropdownHeight }}
        ref={dropdownListRef}
      >
        <div 
          className={[
            styles[`${size}-multi-select-search`], 
            styles[`multi-select-search`]
          ].join(' ')} 
          ref={searchRef}
        >
          <IconSearch className={styles[`${size}-multi-select-svg`]} />
          <input 
            type="text"
            className={styles[`multi-select-input`]}
            placeholder='Поиск'
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {currentElements.map((element, index) => (
          <li key={index} className={styles[`multi-select-element`]} >
            <Button 
              text={element}
              size={size}
              mode='clear'
              isIconsNeeded={false}
              onClick={() => {setIsOpen(false); selectHandler(element)}}
              className={styles['multi-select-button']}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MultiSelect
