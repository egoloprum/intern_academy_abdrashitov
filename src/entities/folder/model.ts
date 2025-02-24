import { File } from "../file"

export type Folder = {
  id: string
  files: File[] | null
  name: string
  description?: string 
  size?: string 
  edited_at: string
  is_archived?: boolean
}
