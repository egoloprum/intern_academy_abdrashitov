"use client"

import { FC, useState, useEffect } from 'react'
import '../styles/segment.css'

interface SegmentedControlsProps {
  size?: 'large' | 'medium' | 'small' | 'xsmall'
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
    console.log(parentSelected?.childNodes)
    
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
        <label 
          key={index} 
          className={[
            'segment-element',
            `${size}-segment-element`
          ].join(' ')}
          onClick={() => setSelect(index)}
        >
          <span>{element}</span>
        </label>
      ))}
    </div>
  )
}

export default SegmentedControls
