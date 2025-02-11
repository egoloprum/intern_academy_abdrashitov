import { FC } from 'react'

interface LeftProps {
  disabled: boolean 
}

const Left: FC<LeftProps> = ({ disabled }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_2_55370" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_2_55370)">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.59375 13.75C11.4415 13.75 13.75 11.4415 13.75 8.59375C13.75 5.74603 11.4415 3.4375 8.59375 3.4375C5.74603 3.4375 3.4375 5.74603 3.4375 8.59375C3.4375 11.4415 5.74603 13.75 8.59375 13.75ZM14.6875 8.59375C14.6875 11.9592 11.9592 14.6875 8.59375 14.6875C5.22826 14.6875 2.5 11.9592 2.5 8.59375C2.5 5.22826 5.22826 2.5 8.59375 2.5C11.9592 2.5 14.6875 5.22826 14.6875 8.59375Z" fill="#08091C" opacity={disabled ? 0.36 : 1} />
        <path d="M12.1974 13.5083C12.225 13.5458 12.2558 13.5817 12.2898 13.6156L15.8996 17.2254C16.2657 17.5915 16.8593 17.5915 17.2254 17.2254C17.5915 16.8593 17.5915 16.2657 17.2254 15.8996L13.6156 12.2898C13.5817 12.2558 13.5458 12.225 13.5083 12.1974C13.1405 12.6981 12.6981 13.1405 12.1974 13.5083Z" fill="#08091C" opacity={disabled ? 0.36 : 1} />
      </g>
    </svg>
  )
}

export default Left
