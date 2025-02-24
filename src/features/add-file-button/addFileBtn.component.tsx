import { Button } from '@/shared/ui/Button'
import Plus from './assets/plus.svg'

import styles from './addFileBtn.module.scss'

export const AddFileBtn = ({}) => {
  return (
    <Button
      type='button'
      size='small'
      className={styles[`add-file-btn`]}
    >
      <Plus />
      Добавить файл
    </Button>
  )
}


