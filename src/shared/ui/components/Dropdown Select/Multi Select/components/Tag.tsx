"use client"

import { FC } from 'react'
import '../styles/tag.css'
import IconRemove from '../assets/IconRemove'

interface TagProps {
  size?: string
  className?: string  
  text?: string 
  setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>
  setCurrentElements: React.Dispatch<React.SetStateAction<string[]>>
}

const Tag: FC<TagProps> = ({
  size="medium",
  text,
  className,
  setSelectedValue,
  setCurrentElements
}) => {
  const removeHandler = () => {
    if (text?.length) {
      setSelectedValue(prevCurrent => prevCurrent.filter(item => item !== text))
      setCurrentElements(prevSelected => [...prevSelected, text])
    }
  }

  return (
    <div className={`tag-wrapper ${size}-tag-wrapper ${className}`}>
      <span>{text}</span>
      <IconRemove className={`multi-select-svg ${size}-multi-select-svg`} onClick={removeHandler} />
    </div>
  )
}

export default Tag
