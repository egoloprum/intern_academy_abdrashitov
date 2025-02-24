import { AddFileBtn } from '@/features/add-file-button'
import styles from './storageWidget.module.scss'

export const StorageWidget = ({}) => {
  return (
    <div className={styles[`storage-container`]}>
    
      <AddFileBtn />
    </div>
  )
}

