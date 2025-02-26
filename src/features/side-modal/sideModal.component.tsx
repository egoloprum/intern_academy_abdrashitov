"use client"

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FolderCreateValidator } from '@/app/validations/folderValidator'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFolderStore } from '@/app/stores/folderStore'

import styles from './sideModal.module.scss'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input Textarea/Input'
import Textarea from '@/shared/ui/Input Textarea/Textarea/Textarea'
import ToggleBtn from '@/shared/ui/Checkbox Radio Toggle/ToggleButton/ToggleBtn'
import { Folder } from '@/entities/folder'

interface SideModalProps {
  folderId?: string 
  onClose?: () => void
}

type FolderData = {
  name: string 
  description: string 
  isArchived: boolean
}

type SideModalRef = {
  showModal: () => void
  close: () => void
}

export const SideModal = forwardRef<SideModalRef, SideModalProps>(
  ({ folderId, onClose = () => {} }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const { register, handleSubmit, reset } = useForm<FolderData>({
    resolver: zodResolver(FolderCreateValidator),
  })

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialogRef.current?.classList.remove('closing')
      dialogRef.current?.classList.add('opening')
      dialogRef.current?.showModal()
      reset()
    },
    close: () => {
      dialogRef.current?.classList.remove('opening')
      dialogRef.current?.classList.add('closing')
      setTimeout(() => {
        dialogRef.current?.close()
        dialogRef.current?.classList.remove('closing')
      }, 500)
    },
  }))

  const { createFolder, editFolder, getFolderById, setFolder } = useFolderStore()
  const [fetchedFolder, setFetchedFolder] = useState<Folder | null>(null)

  useEffect(() => {
    if (folderId) {
      const folder = getFolderById(folderId)
      setFetchedFolder(folder)
      reset()

      if (folder) {
        reset({
          name: folder.name,
          description: folder.description,
          isArchived: folder.isArchived || false, 
        })
      }
    }
  }, [folderId, getFolderById, fetchedFolder, reset])

  const onSubmit: SubmitHandler<FolderData> = async (data) => {
    reset()
    const dateNow = new Date()

    const folder = {
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description,
      edited_at: `${dateNow}`,
      files: null
    }

    if (folderId) {
      editFolder(folderId, data.name, data.description, data.isArchived, `${dateNow}`)
      setFolder()
      onClose()
      return 
    }

    createFolder(folder)
    setFolder()
    onClose()
  }

  return (
    <dialog 
      ref={dialogRef}
      className={[styles['folder-sheet'], 'folder-create-dialog'].join(' ')}
    >
      <form
        className={styles[`folder-form`]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className={styles[`folder-fieldset-1`]}>
          <div className={styles['folder-label']}>
            <h3>
              { folderId ? 'Редактировать' : 'Создать' } папку
            </h3>
            <p>
              Отличный способ сгруппировать нужные вам файлы
            </p>
          </div>

          <div className={[styles[`folder-input`], styles[`${!folderId && 'toggle-hide'}`]].join(' ')}>
            <Input 
              topLabel='Название папки'
              bottomLabel=''
              placeholder='Введите название'
              {...register('name')}
              defaultValue={fetchedFolder?.name}
              required
            />
            <Textarea 
              topLabel='Описание'
              bottomLabel=''
              placeholder='Введите описание'
              {...register('description')}
              defaultValue={fetchedFolder?.description}
            />


            <ToggleBtn
              inputSize='medium'
              label='Поместить в архив'
              className={styles[``]}
              {...register('isArchived')}
            />

          </div>
        </fieldset>

        <fieldset className={styles[`folder-fieldset-2`]}>
          <Button
            type='submit'
            size='small'
          >
            { folderId ? 'Сохранить' : 'Создать' }
          </Button>
          <Button
            type='button'
            mode='secondary'
            size='small'
            onClick={onClose}
          >
            Отмена
          </Button>
        </fieldset>
      </form>
    </dialog>
  )
})

SideModal.displayName = 'SideModal'
