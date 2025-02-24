import { UserLayout } from '@/entities/user'
import { CreateFolderBtn } from '@/features/create-folder-button'

import styles from './sidebar.module.scss'

export const Sidebar = ({}) => {
  return (
    <div className={styles[`sidebar`]}>
      <UserLayout />
      <CreateFolderBtn />
    </div>
  )
}

