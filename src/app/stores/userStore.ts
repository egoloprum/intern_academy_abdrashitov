import { signIn, signOut } from 'next-auth/react'
import { create } from 'zustand'
import { createUser, getUser } from '../lib/db'

const authenticateUser  = async (email: string, password: string) => {
  try {
    const user = await getUser(email) 

    if (!user) {
      throw new Error('User  not found')
    }

    if (user.password !== password) {
      throw new Error('Incorrect password')
    }

    return user
  } catch (error) {
    throw error
  }
}

type UserStore = {
  user: User | null

  setUser: (user: User) => void
  loginWithGoogle: () => void
  loginUser:  (data: {
    email: string
    password: string
  }) => void
  registerUser: () => void
  logoutUser: () => void 
}

export const useUserStore = create<UserStore>((set, get) => ({
  user: null,
  setUser: (user: User) => {
    set({ user: user })
  },
  loginWithGoogle: async () => {
    try {
      await signIn('google')
    } catch (error) {
      throw error
    }
  },
  logoutUser: async () => {
    try {
      await signOut()
    } catch (error) {
      throw error
    }
  },
  loginUser: async (data: {
    email: string
    password: string
  }) => {
    const user = await authenticateUser(data.email, data.password)
    try {
      await signIn('credentials', {
        redirect: true,
        ...user,
      })
    } catch (error) {
      throw error
    }
  },
  registerUser: async () => {
    try {
      const currentUser = get().user
      if (!currentUser) { return }

      const isCreated = await createUser(currentUser)

      if (!isCreated) { return }

      get().loginUser({
        email: currentUser.email, 
        password: currentUser.password
      })
    } catch (error) {
      throw error
    }
  }
  
}))

