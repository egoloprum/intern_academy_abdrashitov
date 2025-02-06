import { FC } from 'react'

interface TestimonialCardProps {
  className?: string
  name: string
  position: string 
  text: string
}

const TestimonialCard: FC<TestimonialCardProps> = ({className, name, position, text}) => {
  return (
    <section className={className}>
      <p>
        <span>{name}</span>
        <span>{position}</span>
      </p>
      <p>{text}</p>
    </section>
  )
}

export default TestimonialCard
