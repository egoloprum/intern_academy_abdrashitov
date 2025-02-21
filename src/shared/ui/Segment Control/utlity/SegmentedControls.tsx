"use client"

import { FC, useState, useEffect } from 'react'
import styles from './segment.module.scss'
import { Button } from '../../Button'

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
      const selectedElement = parentSelected.children[select + 1]
      if (selectedElement) {
        const { offsetLeft } = selectedElement as HTMLElement
        setSlidePosition(offsetLeft)
      }
    }
  }, [select, elements.length])

  return (
    <div 
      className={[
        styles[`segment-group`],
        styles[`segment-group-${mode}`]
      ].join(' ')}
      id={`${elements.length}-segment-group`} 
    >
      <div 
        className={[
          styles[`sliding-background`],
          styles[`sliding-background-${mode}`]
        ].join(' ')}
        style={{ transform: `translate(${slidePosition}px, -50%)`, width: `${(100 - 2) / elements.length}%` }} 
      />
      {elements.map((element, index) => (
        <Button 
          key={index}
          size={size}
          mode={'clear'}
          onClick={() => setSelect(index)}
          className={styles['segment-element']}
        >
          {element}
        </Button>
      ))}
    </div>
  )
}

export default SegmentedControls
