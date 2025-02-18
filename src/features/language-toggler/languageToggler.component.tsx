"use client"

import { FC } from 'react'
import Toggler from './assets/languageToggler.svg'

interface LanguageTogglerProps {
  className: string 
}

export const LanguageToggler: FC<LanguageTogglerProps> = ({className}) => {
  return (
    <Toggler 
      className={className} 
      onClick={() => console.log(1)} 
    />
  )
}


