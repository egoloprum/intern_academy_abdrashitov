import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'

import styles from './layout.module.scss'

export const UserLayout = async ({}) => {
  const session = await getServerSession(authOptions)

  return (
    <div className={styles['user-layout-component']}>
      <p className={styles['user-username']}>
        {session?.user.username}
      </p>
      <p className={styles['user-email']}>
        {session?.user.email}
      </p>
      <p className={styles['user-telephone']}>
        {session?.user.telephone}
      </p>
    </div>
  )
}

