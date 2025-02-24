import { FC } from 'react'
import styles from './folderCard.module.scss'
import { Folder } from './model'

interface FolderCardProps {
  folder: Folder
}

function formatDate(date: string) {
  const newDate = new Date(date)

  const day = String(newDate.getDate()).padStart(2, '0')
  const month = String(newDate.getMonth() + 1).padStart(2, '0')
  const year = newDate.getFullYear()

  return `${day}.${month}.${year}`
}

export const FolderCard: FC<FolderCardProps> = ({folder}) => {
  return (
    <div className={styles[`folder-card`]}>
      <p className={styles[`folder-name`]}>
        {folder.name}
      </p>

      <p className={styles[`folder-details`]}>
        <span>Общий размер файлов: {folder.size || 0}</span>
        <span>Последние изменения: {formatDate(folder.edited_at)}</span>
      </p>
    </div>
  )
}
