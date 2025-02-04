import { FC, ReactNode } from 'react'
import DescriptionBarCode from './logo/DescriptionBarCode'

interface DescriptionCardProps {
  image: ReactNode
  headerText: string
  paramText: string
}

const DescriptionCard: FC<DescriptionCardProps> = ({image, headerText, paramText}) => {
  return (
    <section className='descriptionCard'>
      <div className='descriptionCardTop'>
        {image}
        <section className='descriptionCardText'>
          <h1 className='descriptionCardHeader'>{headerText}</h1>
          <p className='descriptionCardParam'>{paramText}</p>
        </section>
      </div>
      <div className='descriptionCardBottom'>
        <DescriptionBarCode />
      </div>
    </section>
  )
}

export default DescriptionCard
