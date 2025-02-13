"use client"

import { FC, useState, useEffect } from 'react'
import '../segment.css'
import Button from '../../Button/Button'

interface SegmentedControlsProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  elements: string[]
  mode: 'default' | 'white'
}

const SegmentedControls: FC<SegmentedControlsProps> = ({
  size,
  elements,
  mode
}) => {
  const [select, setSelect] = useState<number>(0)
  const [slidePosition, setSlidePosition] = useState(0)

  useEffect(() => {
    const parentSelected = document.getElementById(`${elements.length}-segment-group`)
    
    if (parentSelected) {
      const selectedElement = parentSelected.querySelector(`.segment-element:nth-child(${select + 2})`)
      if (selectedElement) {
        const { offsetLeft } = selectedElement as HTMLElement
        setSlidePosition(offsetLeft)
      }
    }
  }, [select, elements.length])

  return (
    <div 
      className={`segment-group segment-group-${mode}`}
      id={`${elements.length}-segment-group`} 
    >
      <div 
        className={`sliding-background sliding-background-${mode}`}
        style={{ transform: `translate(${slidePosition}px, -50%)`, width: `${(100 - 2) / elements.length}%` }} 
      />
      {elements.map((element, index) => (
        <Button 
          key={index}
          size={size}
          mode={'clear'}
          isIconsNeeded={false}
          onClick={() => setSelect(index)}
          text={element}
          className='segment-element'
        />
      ))}
    </div>
  )
}

export default SegmentedControls
