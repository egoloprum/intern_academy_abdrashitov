import { z } from 'zod';

export const FolderCreateValidator = z.object({
  name: z.string().max(100),
  description: z.string().max(225),
  isArchived: z.boolean()
})
