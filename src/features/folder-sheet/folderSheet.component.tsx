"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import { FolderCreateValidator } from '@/app/validations/folderValidator'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './folderSheet.module.scss'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input Textarea/Input'
import Textarea from '@/shared/ui/Input Textarea/Textarea/Textarea'
import { useFolderStore } from '@/app/stores/fileStore'

type FolderCreateData = {
  name: string 
  description: string 
}

export const FolderSheet = ({}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FolderCreateData>({
    resolver: zodResolver(FolderCreateValidator),
  })

  const { createFolder } = useFolderStore()

  const onSubmit: SubmitHandler<FolderCreateData> = async (data) => {
    console.log(data)

    const dateNow = new Date()

    const folder = {
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description,
      edited_at: `${dateNow}`,
      files: null
    }

    createFolder(folder)

    closeModalHandler()
  }

  const closeModalHandler = () => {
    const folderDialog = document.querySelector('.folder-create-dialog') as HTMLDialogElement;
    folderDialog.close()
  }

  return (
    <dialog className={[styles['folder-sheet'], 'folder-create-dialog'].join(' ')}>
      <form
        className={styles[`folder-form`]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className={styles[`folder-fieldset-1`]}>
          <div className={styles['folder-label']}>
            <h3>
              Создать папку
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
          </div>
        </fieldset>

        <fieldset className={styles[`folder-fieldset-2`]}>
          <Button
            type='submit'
            size='small'
          >
            Создать
          </Button>
          <Button
            type='button'
            mode='secondary'
            size='small'
            onClick={closeModalHandler}
          >
            Отмена
          </Button>
        </fieldset>
      </form>
    </dialog>
  )
}

