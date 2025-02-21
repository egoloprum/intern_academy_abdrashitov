"use client"

import { FC, useRef } from 'react'
import Tag from './Tag'

interface SelectedListProps {
  selectedValue: string[]
  size?: string 
  className: string
  setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>
  setCurrentElements: React.Dispatch<React.SetStateAction<string[]>>
}

const SelectedList: FC<SelectedListProps> = ({selectedValue, size, className, setCurrentElements, setSelectedValue}) => {
  const listRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!listRef.current) {
      return
    }
    const startX = e.pageX - listRef.current.offsetLeft
    const scrollLeft = listRef.current.scrollLeft

    const handleMouseMove = (e: MouseEvent) => {
      if (!listRef.current) {
        return
      }
      const x = e.pageX - listRef.current.offsetLeft
      const walk = (x - startX) * 2 
      listRef.current.scrollLeft = scrollLeft - walk
    }

    const handleMouseUp = () => {
      if (!listRef.current) {
        return
      }
      listRef.current.removeEventListener('mousemove', handleMouseMove)
      listRef.current.removeEventListener('mouseup', handleMouseUp)
      listRef.current.removeEventListener('mouseleave', handleMouseUp)
      listRef.current.style.cursor = 'grab' 
    }

    listRef.current.addEventListener('mousemove', handleMouseMove)
    listRef.current.addEventListener('mouseup', handleMouseUp)
    listRef.current.addEventListener('mouseleave', handleMouseUp)
    listRef.current.style.cursor = 'grabbing'
  }

  return (
    <div 
      className={`${className}`} 
      ref={listRef}
      onMouseDown={handleMouseDown}
    >
      {selectedValue.map((selected, index) => (
        <Tag 
          key={index}
          size={size} 
          text={selected} 
          setSelectedValue={setSelectedValue} 
          setCurrentElements={setCurrentElements} 
        />
      ))}
    </div>
  )
}

export default SelectedList
