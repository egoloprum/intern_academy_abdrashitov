"use client"

import { forwardRef, useImperativeHandle, useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FolderCreateValidator } from '@/app/validations/folderValidator'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useFolderStore } from '@/app/stores/folderStore'

import styles from './sideModal.module.scss'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input Textarea/Input'
import Textarea from '@/shared/ui/Input Textarea/Textarea/Textarea'
import ToggleBtn from '@/shared/ui/Checkbox Radio Toggle/ToggleButton/ToggleBtn'

interface SideModalProps {
  folderId?: string 
  onClose?: () => void
}

type FolderData = {
  name: string 
  description: string 
  isArchived?: boolean
}

type SideModalRef = {
  showModal: () => void
  close: () => void
}

export const SideModal = forwardRef<SideModalRef, SideModalProps>(
  ({ folderId, onClose = () => {} }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialogRef.current?.showModal()
    },
    close: () => {
      dialogRef.current?.close()
    },
  }))

  const { register, handleSubmit, reset } = useForm<FolderData>({
    resolver: zodResolver(FolderCreateValidator),
  })

  const { createFolder, editFolder, setFolder } = useFolderStore()

  const onSubmit: SubmitHandler<FolderData> = async (data) => {
    const dateNow = new Date()

    const folder = {
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description,
      edited_at: `${dateNow}`,
      files: null
    }

    if (folderId) {
      editFolder(folderId, data.name, data.description, data.isArchived || false, `${dateNow}`)
      setFolder()
      reset()
      onClose()
      return 
    }

    createFolder(folder)
    setFolder()
    reset()
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

          <div className={styles[`folder-input`]}>
            <Input 
              topLabel='Название папки'
              bottomLabel=''
              placeholder='Введите название'
              {...register('name')}
              required
            />
            <Textarea 
              topLabel='Описание'
              bottomLabel=''
              placeholder='Введите описание'
              {...register('description')}
            />

            { folderId && (
              <ToggleBtn
                inputSize='medium'
                label='Поместить в архив'
                {...register('isArchived')}
              />
            )}

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
