import { Folder } from '@/entities/folder'
import { create } from 'zustand'
import { createFolder, deleteFolder, getFolders } from '../lib/db'

type FolderStore = {
  folders: Folder[] | null

  setFolder: () => void
  createFolder: (folder: Folder) => void
  // editFolder: (folder: Folder) => void
  deleteFolder: (folderId: string) => void
}

export const useFolderStore = create<FolderStore>((set) => ({
  folders: null,
  setFolder: async () => {
    try {
      const fetchFolders = await getFolders()
      if (fetchFolders) {
        set({ folders: fetchFolders })
      } else {
        set({ folders: null }) 
      }
    } catch (error) {
      throw error
    }
  },
  createFolder: async (folder: Folder) => {
    try {
      const isCreated = await createFolder(folder)
      if (!isCreated) { return }
    } catch (error) {
      throw error
    }
  },
  deleteFolder: async (folderId: string) => {
    try {
      const isDeleted = await deleteFolder(folderId)
      if (!isDeleted) { return }
    } catch (error) {
      throw error
    }
  }
}))
