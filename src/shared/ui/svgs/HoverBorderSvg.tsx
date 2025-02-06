import { FC } from 'react'

interface HoverBorderSvgProps {
  className?: string
}

const HoverBorderSvg: FC<HoverBorderSvgProps> = ({className}) => {
  return (
    <svg className={`${className} servicesHoverBorderSvg`} width="100%" height="100%" viewBox="0 0 1000 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M480 350C492.712 350 500 342.712 500 330C500 342.712 507.288 350 520 350C507.288 350 500 357.288 500 370C500 357.288 492.712 350 480 350Z" fill="white"/>
      <path d="M500 700V0" stroke="url(#paint0_linear_8_716)" strokeWidth="2"/>
      <path d="M1000 350L0 350" stroke="url(#paint1_linear_8_716)" strokeWidth="2"/>
      <defs>
      <linearGradient id="paint0_linear_8_716" x1="500.5" y1="0" x2="500.5" y2="700" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.2"/>
        <stop offset="0.5" stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint1_linear_8_716" x1="0" y1="349.5" x2="1000" y2="349.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.2"/>
        <stop offset="0.5" stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
      </linearGradient>
      </defs>
    </svg>

  )
}

export default HoverBorderSvg
