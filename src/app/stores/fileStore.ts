import { Folder } from '@/entities/folder'
import { create } from 'zustand'
import { createFolder } from '../lib/db'

type FolderStore = {
  folder: Folder | null

  // setFolder: (folder: Folder) => void
  createFolder: (folder: Folder) => void
  // editFolder: (folder: Folder) => void
  // deleteFolder: (folder: Folder) => void
}

export const useFolderStore = create<FolderStore>((set, get) => ({
  folder: null,
  createFolder: async (folder: Folder) => {
    try {
      const isCreated = await createFolder(folder)
      if (!isCreated) { return }
    } catch (error) {
      throw error
    }
  }
}))
