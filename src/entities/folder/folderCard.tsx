import { FC } from 'react'

import { Folder } from './model'
import { EditFolderBtn } from '@/features/edit-folder-button'
import { DeleteFolderBtn } from '@/features/delete-folder-button'

import styles from './folderCard.module.scss'
import Archive from './assets/archive.svg'

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
      <p className={styles[`folder-top`]}>
        <span>{folder.name}</span>
        {folder.isArchived && 
          <Archive />
        }
      </p>

      <div className={styles[`folder-bottom`]}>
        <p className={styles[`folder-details`]}>
          <span>Общий размер файлов: {folder.size || 0}</span>
          <span>Последние изменения: {formatDate(folder.edited_at)}</span>
        </p>

        <div className={styles[`folder-buttons`]}>
          <EditFolderBtn id={folder.id} />
          <DeleteFolderBtn id={folder.id} />
        </div>
      </div>

    </div>
  )
}
