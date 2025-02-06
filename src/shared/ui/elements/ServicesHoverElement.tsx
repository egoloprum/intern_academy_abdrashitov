import { FC } from 'react'

interface ServicesHoverElementProps {
  index: string 
  headerText: string
  paramText: string 
}

const ServicesHoverElement: FC<ServicesHoverElementProps> = ({index, headerText, paramText}) => {
  return (
    <section className='servicesHoverElement'>
      <section>
        <span>{index}</span>
        <div>
          <h1>{headerText}</h1>
          <p>{paramText}</p>
        </div>
      </section>
    </section>
  )
}

export default ServicesHoverElement
