import { FC, MouseEventHandler } from 'react'

interface FileCancelSvgProps {
  className?: string
  onClick: MouseEventHandler<SVGSVGElement>
  disabled?: boolean
}

const FileCancelSvg: FC<FileCancelSvgProps> = ({className, onClick, disabled}) => {
  return (
    <svg onClick={onClick} className={className} width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.80806 5.80806C6.05214 5.56398 6.44786 5.56398 6.69194 5.80806L10 9.11612L13.3081 5.80806C13.5521 5.56398 13.9479 5.56398 14.1919 5.80806C14.436 6.05214 14.436 6.44786 14.1919 6.69194L10.8839 10L14.1919 13.3081C14.436 13.5521 14.436 13.9479 14.1919 14.1919C13.9479 14.436 13.5521 14.436 13.3081 14.1919L10 10.8839L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L9.11612 10L5.80806 6.69194C5.56398 6.44786 5.56398 6.05214 5.80806 5.80806Z" fill="#08091C" opacity={`${disabled ? '0.36' : '1'}`}/>
    </svg>
  )
}

export default FileCancelSvg
