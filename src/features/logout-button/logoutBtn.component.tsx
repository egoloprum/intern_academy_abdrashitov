"use client"

import { signOut } from 'next-auth/react'
import { Button } from '@/shared/ui/components/Button'

const signOutHandler = async () => {
  try {
    await signOut()
  } catch {}
}

export const LogoutBtn = ({}) => {
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

