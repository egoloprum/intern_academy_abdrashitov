import { FC } from 'react'

interface ServicesHoverElementProps {
  className: string
  index: string 
  headerText: string
  paramText: string 
}

const ServicesHoverElement: FC<ServicesHoverElementProps> = ({className, index, headerText, paramText}) => {
  return (
    <section className={className}>
      <section>
        <p>{index}</p>
        <p>
          <span>{headerText}</span>
          <span>{paramText}</span>
        </p>
      </section>
    </section>
  )
}

export default ServicesHoverElement
