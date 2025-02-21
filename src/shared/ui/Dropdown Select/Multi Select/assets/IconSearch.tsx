import { FC } from 'react'

interface IconSearchProps {
  className?: string
}

const IconSearch: FC<IconSearchProps> = ({className}) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_633_2780" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_633_2780)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 11C9.15317 11 11 9.15317 11 6.875C11 4.59683 9.15317 2.75 6.875 2.75C4.59683 2.75 2.75 4.59683 2.75 6.875C2.75 9.15317 4.59683 11 6.875 11ZM11.75 6.875C11.75 9.56739 9.56739 11.75 6.875 11.75C4.18261 11.75 2 9.56739 2 6.875C2 4.18261 4.18261 2 6.875 2C9.56739 2 11.75 4.18261 11.75 6.875Z" fill="#08091C" fillOpacity="0.6"/>
        <path d="M9.75791 10.8066C9.78003 10.8366 9.80467 10.8653 9.83182 10.8925L12.7197 13.7803C13.0126 14.0732 13.4874 14.0732 13.7803 13.7803C14.0732 13.4874 14.0732 13.0126 13.7803 12.7197L10.8925 9.83182C10.8653 9.80467 10.8366 9.78003 10.8066 9.75791C10.5124 10.1585 10.1585 10.5124 9.75791 10.8066Z" fill="#08091C" fillOpacity="0.6"/>
      </g>
    </svg>

  )
}

export default IconSearch
