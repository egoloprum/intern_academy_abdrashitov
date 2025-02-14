"use client"

import { FC, useEffect, useRef, useState } from 'react'
import IconSelect from '../Select/assets/IconSelect'
import "./styles/multiSelect.css"
import Button from '../../Button/Button'
import IconSearch from './assets/IconSearch'
import IconRemove from './assets/IconRemove'
import SelectedList from './components/SelectedList'

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
    <div className={'multi-select-wrapper'}>
      <label
        className={`${size}-multi-select-text multi-select-label`} 
        htmlFor="#multi-select-wrapper"
      >
          {topLabel}
      </label>
      <button 
        className={`
          multi-select-opener 
          ${isOpen && 'multi-open-select-opener'}
          ${selectedValue.length && 'selected-opener'}
        `}
        onClick={() => setIsOpen(prev => !prev)}
      >
        { selectedValue.length ? (
          <SelectedList 
            selectedValue={selectedValue} 
            setCurrentElements={setCurrentElements}
            setSelectedValue={setSelectedValue}
            size={size} 
            className='selected-list' 
          />
        ) : (
          <span className={`multi-select-text ${size}-multi-select-text ${isOpen && 'open-multi-select-text'}`}>{placeholder}</span>
        )}
        <IconRemove 
          className={`multi-select-svg multi-select-remove-svg ${size}-multi-select-svg ${selectedValue.length && 'selected-svg'}`} 
          onClick={removeHandler} 
        />
        <IconSelect className={`multi-select-dropper-svg ${size}-multi-select-svg ${isOpen && 'rotated-svg'}`} />
      </button>

      <ul 
        className={`multi-select-list`} 
        style={{ opacity: isOpen ? `1` : '0', maxHeight: dropdownHeight }}
        ref={dropdownListRef}
      >
        <div className={`multi-select-search ${size}-multi-select-search`} ref={searchRef}>
          <IconSearch className={`${size}-multi-select-svg`} />
          <input 
            type="text"
            className={`multi-select-input`}
            placeholder='Поиск'
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {currentElements.map((element, index) => (
          <li key={index} className={`multi-select-element`} >
            <Button 
              text={element}
              size={size}
              mode='clear'
              className='multi-select-button'
              isIconsNeeded={false}
              onClick={() => {setIsOpen(false); selectHandler(element)}}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MultiSelect
