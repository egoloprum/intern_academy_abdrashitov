"use client"

import Plus from './assets/plus.svg'
import { Button } from '@/shared/ui/Button'
import styles from './createFolderBtn.module.scss'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { SideModal } from '../side-modal'

export const CreateFolderBtn = ({}) => {
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
        type='button'
        size='small'
        className={styles[`create-folder-btn`]}
        onClick={openDialog}
      >
        <Plus />
        Создать папку
      </Button>
      {isClient && createPortal(
        <SideModal onClose={closeDialog} ref={dialogRef} />,
        document.body 
      )}
    </>
  )
}


