"use client"

import { FC } from 'react'
import IconRemove from '../assets/IconRemove'
import styles from '../styles/tag.module.scss'

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
    <div className={[
        styles[`tag-wrapper`],
        styles[`${size}-tag-wrapper`],
        styles[`${className}`],
      ].join(' ')}>
      <span>{text}</span>
      <IconRemove className={[
        styles[`multi-select-svg`],
        styles[`${size}-multi-select-svg`],
      ].join(' ')} onClick={removeHandler} />
    </div>
  )
}

export default Tag
