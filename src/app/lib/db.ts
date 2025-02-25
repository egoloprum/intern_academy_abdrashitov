import { Folder } from "@/entities/folder"
import { User } from "@/entities/user"

const dbName = 'Task-3'
let db: IDBDatabase | null = null

const openDatabase = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 2)

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result 

      if (!db.objectStoreNames.contains('users')) {
        const objectStore = db.createObjectStore('users', { keyPath: 'id' })
        objectStore.createIndex('email', 'email', { unique: true })
      }

      if (!db.objectStoreNames.contains('folder')) {
        db.createObjectStore('folder', { keyPath: 'id' })
      }
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

export const createFolder = async (folder: Folder): Promise<string> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }
    
    const transaction = (db as IDBDatabase).transaction(['folder'], 'readwrite')
    const objectStore = transaction.objectStore('folder')

    console.log("folder", folder)

    const request = objectStore.add(folder)

    request.onsuccess = () => {
      resolve('Folder created successfully')
    }

    request.onerror = (event: Event) => { 
      const target = event.target as IDBRequest 
      if (target.error && target.error.name === 'ConstraintError') {
        reject('Name is required')
      } else {
        reject('Error adding folder: ' + (target.error ? target.error.message : 'Unknown error'))
      }
    }
  })
}

export const editFolder = async (
  folderId: string, 
  name: string, 
  description: string, 
  isArchived: boolean, 
  edited_at: string
): Promise<string> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }

    const transaction = (db as IDBDatabase).transaction(['folder'], 'readwrite')
    const objectStore = transaction.objectStore('folder')

    const request = objectStore.get(folderId)

    request.onsuccess = (event: Event) => {
      const target = event.target as IDBRequest
      const folder = target.result

      if (!folder) {
        reject('Folder not found')
        return
      }

      const editedFolder = {
        id: folderId,
        name: name,
        description: description,
        isArchived: isArchived,
        edited_at: edited_at,
        files: folder.files
      }

      const updateRequest = objectStore.put(editedFolder)

      updateRequest.onsuccess = () => {
        resolve('Folder updated successfully')
      }

      updateRequest.onerror = (event: Event) => {
        const target = event.target as IDBRequest
        reject('Error updating folder: ' + (target.error ? target.error.message : 'Unknown error'))
      }
    }

    request.onerror = (event: Event) => {
      const target = event.target as IDBRequest
      reject('Error retrieving folder: ' + (target.error ? target.error.message : 'Unknown error'))
    }
  })
}

export const deleteFolder = async (folderId: string): Promise<string> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }

    const transaction = (db as IDBDatabase).transaction(['folder'], 'readwrite')
    const objectStore = transaction.objectStore('folder')

    const request = objectStore.delete(folderId)

    request.onsuccess = () => {
      resolve('Folder deleted successfully')
    }

    request.onerror = (event: Event) => {
      const target = event.target as IDBRequest
      reject('Error deleting folder: ' + (target.error ? target.error.message : 'Unknown error'))
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

    const transaction = (db as IDBDatabase).transaction(['users'], 'readwrite')
    const objectStore = transaction.objectStore('users')

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

export const getFolders = async (): Promise<Folder[] | null> => {
  await openDatabase()

  return new Promise((resolve, reject) => {
    if (!db) {
      reject('Database not initialized')
      return
    }

    const transaction = (db as IDBDatabase).transaction(['folder'], 'readonly')
    const objectStore = transaction.objectStore('folder')

    const request = objectStore.getAll()

    request.onsuccess = (event: Event) => { 
      const target = event.target as IDBRequest 
      const folders = target.result as Folder []
      if (folders) {
        resolve(folders)
      } else {
        resolve(null)
      }
    }

    request.onerror = (event: Event) => { 
      const target = event.target as IDBRequest
      reject('Error retrieving folders: ' + (target.error ? target.error.message : 'Unknown error'))
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

    const transaction = (db as IDBDatabase).transaction(['users'], 'readonly')
    const objectStore = transaction.objectStore('users')
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
