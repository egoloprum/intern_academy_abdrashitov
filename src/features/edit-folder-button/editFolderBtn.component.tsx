"use client"

import { FC } from 'react'

import { Button } from '@/shared/ui/Button'
import Edit from './assets/edit.svg'

interface EditFolderBtnProps {
  id: string 
}

export const EditFolderBtn: FC<EditFolderBtnProps> = ({id}) => {
  
  const EditFolderHandler = () => {
    console.log("edit", id)
  }
  
  return (
    <Button
      isMini={true}
      mode='secondary'
      type='button'
      size='small'
      onClick={EditFolderHandler}
    >
      <Edit />
    </Button>
  )
}
