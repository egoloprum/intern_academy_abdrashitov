import { FC } from 'react'

interface ArrowProps {
  className?: string
  params: string
}

const Arrow: FC<ArrowProps> = ({className, params}) => {
  return (
    <svg className={className} width={params} height={params} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_8_302)">
        <path d="M4.04331 18.1082L14.9667 7.18485L6.48142 7.18484L6.48142 4.51858H19.5186L19.5186 17.5557H16.8523L16.8523 9.07046L5.92893 19.9938L4.04331 18.1082Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_8_302">
        <rect width={params} height={params} fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Arrow
