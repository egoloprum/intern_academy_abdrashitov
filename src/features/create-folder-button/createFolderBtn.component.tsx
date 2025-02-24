"use client"

import Plus from './assets/plus.svg'
import { Button } from '@/shared/ui/Button'
import styles from './createFolderBtn.module.scss'


export const CreateFolderBtn = ({}) => {
  const clickHandler = () => {
    const folderDialog = document.querySelector('.folder-create-dialog') as HTMLDialogElement
    folderDialog.showModal()
  }
  
  return (
    <Button
      type='button'
      size='small'
      className={styles[`create-folder-btn`]}
      onClick={clickHandler}
    >
      <Plus />
      Создать папку
    </Button>
  )
}


