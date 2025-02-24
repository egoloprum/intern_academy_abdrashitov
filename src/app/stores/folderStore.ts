import { Folder } from '@/entities/folder'
import { create } from 'zustand'
import { createFolder, getFolders } from '../lib/db'

type FolderStore = {
  folders: Folder[] | null

  setFolder: () => void
  createFolder: (folder: Folder) => void
  // editFolder: (folder: Folder) => void
  // deleteFolder: (folder: Folder) => void
}

export const useFolderStore = create<FolderStore>((set, get) => ({
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
  }
}))
