import { FC } from 'react'
import SegmentedControls from './utlity/SegmentedControls'

interface SegmentedContolsListProps {
  size?: 'large' | 'medium' | 'small' | 'xsmall'
  elements?: string[]
}

const SegmentedContolsList: FC<SegmentedContolsListProps> = ({
  size = "medium",
  elements = ["Variant", "Variant", "Variant", "Variant", "Variant"],
}) => {
  return (
    <div className='segment-list'>
      <SegmentedControls size={size} elements={elements} mode='default' />
      <SegmentedControls size={size} elements={elements} mode='white' />
    </div>
  )
}

export default SegmentedContolsList
