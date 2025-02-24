import { Button } from '@/shared/ui/Button'
import Plus from './assets/plus.svg'

import styles from './createFolderBtn.module.scss'



export const CreateFolderBtn = ({}) => {
  return (
    <Button
      type='button'
      size='small'
      className={styles[`create-folder-btn`]}
    >
      <Plus />
      Создать папку
    </Button>
  )
}


