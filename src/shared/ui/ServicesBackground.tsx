import { FC } from 'react'

interface ServicesBackgroundProps {
  className?: string
}

const ServicesBackground: FC<ServicesBackgroundProps> = ({className}) => {
  return (
    <svg className={`${className} servicesBackgroundSvg`} width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="200" fill="url(#paint0_linear_488_38)"/>
      <defs>
        <linearGradient id="paint0_linear_488_38" x1="200" y1="0" x2="200" y2="400" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2068CA"/>
        <stop offset="0.31" stopColor="#2774DD"/>
        <stop offset="0.745" stopColor="#04B7F1"/>
        <stop offset="1" stopColor="#38CCFC"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ServicesBackground
