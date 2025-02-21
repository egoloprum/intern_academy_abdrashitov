const dbName = 'Task-3'
const storeName = 'users'
let db: IDBDatabase | null = null

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1)

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result 
      const objectStore = db.createObjectStore(storeName, { keyPath: 'id' })
      objectStore.createIndex('email', 'email', { unique: true })
    }

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result 
      resolve(db)
    }

    request.onerror = (event) => {
      reject('Database error: ' + (event.target as IDBRequest).error) 
    }
  })
}

export const createUser = async (user: User): Promise<string> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }

    const transaction = (db as IDBDatabase).transaction([storeName], 'readwrite')
    const objectStore = transaction.objectStore(storeName)

    const request = objectStore.add(user)

    request.onsuccess = () => {
      resolve('User  created successfully')
    }

    request.onerror = (event: Event) => { 
      const target = event.target as IDBRequest 
      if (target.error && target.error.name === 'ConstraintError') {
        reject('Email must be unique')
      } else {
        reject('Error adding user: ' + (target.error ? target.error.message : 'Unknown error'))
      }
    }
  })
}

export const getUser  = async (email: string): Promise<User | null> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }

    const transaction = (db as IDBDatabase).transaction([storeName], 'readonly')
    const objectStore = transaction.objectStore(storeName)
    const index = objectStore.index('email')

    const request = index.get(email)

    request.onsuccess = (event: Event) => { 
      const target = event.target as IDBRequest 
      const user = target.result as User
      if (user) {
        resolve(user)
      } else {
        resolve(null)
      }
    }

    request.onerror = (event: Event) => { 
      const target = event.target as IDBRequest
      reject('Error retrieving user: ' + (target.error ? target.error.message : 'Unknown error'))
    }
  })
}
