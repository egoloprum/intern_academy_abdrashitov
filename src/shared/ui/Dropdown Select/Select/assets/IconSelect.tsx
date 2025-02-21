import { FC } from 'react'

interface IconSelectProps {
  className?: string 
}

const IconSelect: FC<IconSelectProps> = ({className}) => {
  return (
    <svg className={className} width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_633_1623" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_633_1623)">
        <path d="M9.99996 12.4792C9.88885 12.4792 9.78468 12.4618 9.68746 12.4271C9.59024 12.3924 9.49996 12.3333 9.41663 12.25L5.58329 8.41666C5.43051 8.26388 5.35413 8.06944 5.35413 7.83333C5.35413 7.59722 5.43051 7.40277 5.58329 7.24999C5.73607 7.09722 5.93051 7.02083 6.16663 7.02083C6.40274 7.02083 6.59718 7.09722 6.74996 7.24999L9.99996 10.5L13.25 7.24999C13.4027 7.09722 13.5972 7.02083 13.8333 7.02083C14.0694 7.02083 14.2638 7.09722 14.4166 7.24999C14.5694 7.40277 14.6458 7.59722 14.6458 7.83333C14.6458 8.06944 14.5694 8.26388 14.4166 8.41666L10.5833 12.25C10.5 12.3333 10.4097 12.3924 10.3125 12.4271C10.2152 12.4618 10.1111 12.4792 9.99996 12.4792Z" fill="#08091C" fillOpacity="0.6"/>
      </g>
    </svg>

  )
}

export default IconSelect
