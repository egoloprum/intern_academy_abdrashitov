"use client"

import { FC, useEffect, useRef, useState } from 'react'

import { Button } from '@/shared/ui/Button'
import Delete from './assets/delete.svg'
import { createPortal } from 'react-dom'
import { DeleteFolderModal } from '../delete-folder-modal'

interface DeleteFolderBtnProps {
  id: string 
}

export const DeleteFolderBtn: FC<DeleteFolderBtnProps> = ({id}) => {
  
  const [isDialogOpen, setDialogOpen] = useState(false)
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
        mode='critical-secondary'
        type='button'
        size='small'
        onClick={openDialog}
      >
        <Delete />
      </Button>

      {isDialogOpen && createPortal(
        <DeleteFolderModal id={id} onClose={closeDialog} ref={dialogRef} />,
        document.body 
      )}
    </>
  )
}
