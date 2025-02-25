"use client"

import Plus from './assets/plus.svg'
import { Button } from '@/shared/ui/Button'
import styles from './createFolderBtn.module.scss'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SideModal } from '../side-modal'


export const CreateFolderBtn = ({}) => {
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
        type='button'
        size='small'
        className={styles[`create-folder-btn`]}
        onClick={openDialog}
      >
        <Plus />
        Создать папку
      </Button>
      {isDialogOpen && createPortal(
        <SideModal onClose={closeDialog} ref={dialogRef} />,
        document.body 
      )}
    </>
  )
}


