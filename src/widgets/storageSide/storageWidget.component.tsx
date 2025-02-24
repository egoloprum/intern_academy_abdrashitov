import { AddFileBtn } from '@/features/add-file-button'
import styles from './storageWidget.module.scss'
import { FC } from 'react'
import { Folder, FolderCard } from '@/entities/folder'

interface StorageWidgetProps {
  folders?: Folder[]
}

export const StorageWidget:FC<StorageWidgetProps> = ({folders}) => {
  return (
    <div className={styles[`storage-container`]}>

      { folders && (
        <>
          {folders.map((folder, index) => (
            <FolderCard key={index} folder={folder} />
          ))}
          <div className={styles['dividing-line']}></div>
        </>
      )}
    

      <AddFileBtn />
    </div>
  )
}

