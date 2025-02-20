import { openDB } from 'idb'

const DB_NAME = 'authDB'
const STORE_NAME = 'users'

const isBrowser = typeof window !== 'undefined'

export const initDB = async () => {
  if (!isBrowser) return null
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    },
  })
}

export const saveUser = async (user: User) => {
  if (!isBrowser) return
  const db = await initDB()
  if (db) await db.put(STORE_NAME, user)
}

export const getUser = async (id: string) => {
  if (!isBrowser) return null
  const db = await initDB()
  return db ? await db.get(STORE_NAME, id) : null
}
