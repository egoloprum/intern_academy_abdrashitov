import Link from 'next/link'
import { FC } from 'react'

interface NavLinkProps {
  children: React.ReactNode
  className?: string
}

const NavLink: FC<NavLinkProps> = ({children, className}) => {
  return (
    <Link href="" className={className}>{children}</Link>
  )
}

export default NavLink
