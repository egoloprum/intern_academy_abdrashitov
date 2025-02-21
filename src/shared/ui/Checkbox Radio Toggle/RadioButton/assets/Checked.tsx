import { FC } from 'react'

interface CheckedProps {
  className?: string
}

const Checked: FC<CheckedProps> = ({className}) => {
  return (
    <svg className={className} width='100%' height='100%' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.500001 13.6944 0.500002 9C0.500002 4.30558 4.30558 0.499999 9 0.5ZM16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85787 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9ZM4 9C4 11.7614 6.23858 14 9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9Z" />
    </svg>
  )
}

export default Checked
