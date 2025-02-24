import { FC } from 'react'
import styles from './folderCard.module.scss'
import { Folder } from './model'

interface FolderCardProps {
  folder: Folder
}

export const FolderCard: FC<FolderCardProps> = ({folder}) => {
  return (
    <div className={styles[`folder-card`]}>
      <p className={styles[`folder-name`]}>
        {folder.name}
      </p>

      <p className={styles[`folder-details`]}>
        <span>Общий размер файлов: {folder.size}</span>
        <span>Последние изменения: {folder.edited_at}</span>
      </p>
    </div>
  )
}
