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
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    setDialogOpen(true)
    dialogRef.current?.showModal()
  }

  const closeDialog = () => {
    setDialogOpen(false)
    dialogRef.current?.close()
  }

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current?.showModal()
    }
  }, [isDialogOpen])
  

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
      {isDialogOpen && createPortal(
        <SideModal folderId={id} onClose={closeDialog} ref={dialogRef} />,
        document.body 
      )}
    </>
  )
}
