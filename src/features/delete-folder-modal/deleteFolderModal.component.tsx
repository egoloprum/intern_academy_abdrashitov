"use client"

import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useFolderStore } from '@/app/stores/folderStore'
import styles from './deleteFolderModal.module.scss'
import { Button } from '@/shared/ui/Button'

interface DeleteFolderModalProps {
  id: string   
  onClose: () => void
}

interface DeleteFolderModalProps {
  id: string   
  onClose: () => void
}

interface DeleteFolderModalRef {
  showModal: () => void
  close: () => void
}

export const DeleteFolderModal = forwardRef<DeleteFolderModalRef, DeleteFolderModalProps>(
  ({ id, onClose }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialogRef.current?.showModal()
    },
    close: () => {
      dialogRef.current?.close()
    },
  }))

  const { deleteFolder, setFolder } = useFolderStore()

  const deleteHandler = () => {
    console.log("Deleting folder with id:", id)
    deleteFolder(id)
    setFolder()
    onClose()
  }

  return (
    <dialog 
      ref={dialogRef}
      className={styles[`delete-modal-container`]} 
    >
      <div className={styles[`delete-modal-label`]}>
        <h3>Удалить папку?</h3>
        <p>Удаление повлечет за собой потерю всех данных по этой папке</p>
      </div>
      <div className={styles[`delete-modal-buttons`]}>
        <Button
          type='button'
          mode='critical-secondary'
          size='small'
          onClick={deleteHandler}
        >
          Удалить
        </Button>
        <Button
          type='button'
          mode='secondary'
          size='small'
          onClick={onClose}
        >
          Отмена
        </Button>
      </div>
    </dialog>
  )
})

DeleteFolderModal.displayName = 'DeleteFolderModal'
