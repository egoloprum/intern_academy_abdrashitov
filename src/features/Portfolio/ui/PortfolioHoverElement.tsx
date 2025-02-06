import { FC, ReactNode } from 'react'

interface PortfolioHoverElementProps {
  keyIndex: number
  index: string 
  text: string 
  barCode: ReactNode
  setHoverIndex: (index: number) => void
}

const PortfolioHoverElement: FC<PortfolioHoverElementProps> = ({keyIndex, index, text, barCode, setHoverIndex}) => {
  return (
    <section 
      onMouseEnter={() => setHoverIndex(keyIndex)}
      onMouseLeave={() => setHoverIndex(0)}
    >
      <p>
        <span>{index}</span>
        <span>{text}</span>
      </p>
      {barCode}
    </section>
  )
}

export default PortfolioHoverElement
