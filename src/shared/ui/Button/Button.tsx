"use client"

import { FC, ButtonHTMLAttributes, LinkHTMLAttributes } from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & LinkHTMLAttributes<HTMLAnchorElement> & {
  size?: 'large' | 'medium' | 'small' | 'xs'
  mode?: 'primary' | 'secondary' | 'clear' | 'critical' | 'critical-secondary'
  isRounded?: boolean 
  isMini?: boolean 
  className?: string
  children: React.ReactNode
  type?: "submit" | "button" | "reset"
  href?: string 
}

export const Button: FC<ButtonProps> = ({
  size='large',
  mode='primary',
  isRounded=false,
  isMini=false,
  className,
  type,
  children,
  href,
  ...rest
}) => {
  const buttonClasses = [
    styles[`button`],
    styles[`${size}-button`],
    styles[`${mode}-button`],
    isRounded ? styles['rounded-button'] : '',
    isMini ? styles['mini-button'] : '',
    isMini ? styles[`mini-${size}-button`] : '',
    className
  ].join(' ')

  if (href) {
    return (
      <Link
        type={type} 
        className={buttonClasses}
        href={href}
        {...rest}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button
      type={type} 
      className={buttonClasses}
      {...rest}
    >
      {children}
    </button>
  )
}


