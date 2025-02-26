"use client"

import { FC, useEffect, useRef, useState } from 'react'

import { Button } from '@/shared/ui/Button'
import Edit from './assets/edit.svg'
import { createPortal } from 'react-dom'
import { SideModal } from '../side-modal'

interface EditFolderBtnProps {
  id: string 
}

export const EditFolderBtn: FC<EditFolderBtnProps> = ({id}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) 
  }, [])

  const openDialog = () => {
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <Button
        isMini={true}
        mode='secondary'
        type='button'
        size='small'
        onClick={openDialog}
      >
        <Edit />
      </Button>
      {isClient && createPortal(
        <SideModal folderId={id} onClose={closeDialog} ref={dialogRef} />,
        document.body 
      )}
    </>
  )
}
