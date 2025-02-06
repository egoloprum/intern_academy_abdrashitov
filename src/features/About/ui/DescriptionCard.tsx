import { FC, ReactNode } from 'react'
import DescriptionBarCode from '../../../shared/ui/barCodes/DescriptionBarCode'

interface DescriptionCardProps {
  className: string
  image: ReactNode
  headerText: string
  paramText: string
}

const DescriptionCard: FC<DescriptionCardProps> = ({className, image, headerText, paramText}) => {
  return (
    <article className={className}>
      <section>
        {image}
        <p>
          <span>{headerText}</span>
          <span>{paramText}</span>
        </p>
      </section>
      <section>
        <DescriptionBarCode />
      </section>
    </article>
  )
}

export default DescriptionCard
