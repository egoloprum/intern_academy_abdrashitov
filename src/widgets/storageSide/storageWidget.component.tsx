"use client"

import { AddFileBtn } from '@/features/add-file-button'
import styles from './storageWidget.module.scss'
import { useEffect } from 'react'
import { FolderCard } from '@/entities/folder'
import { useFolderStore } from '@/app/stores/folderStore'

export const StorageWidget = () => {
  const { folders, setFolder, createFolder } = useFolderStore()

  useEffect(() => {
    setFolder()
  }, [setFolder])

  return (
    <div className={styles[`storage-container`]}>

      <div className={styles[`storage-wrapper`]}>
        {folders && (
          <>
            {folders.map((folder, index) => (
              <FolderCard key={index} folder={folder} />
            ))}
            <div className={styles['dividing-line']}></div>
          </>
        )}
      </div>
    

      <AddFileBtn />
    </div>
  )
}

