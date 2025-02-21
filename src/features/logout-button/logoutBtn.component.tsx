"use client"

import { Button } from '@/shared/ui/Button'
import { useUserStore } from '@/app/stores/userStore'

export const LogoutBtn = ({}) => {
  const { logoutUser } = useUserStore()

  const signOutHandler = async () => {
    logoutUser()
  }

  return (
    <Button
      type='button'
      mode='secondary'
      size='xs'
      onClick={signOutHandler}
    >
      Выйти из системы
    </Button>
  )
}

