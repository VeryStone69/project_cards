import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const nameSchema = z.string().trim().min(3, 'The name must be at least 3 characters')
const coverSchema = z
  .instanceof(File)
  .refine(files => files.size <= MAX_FILE_SIZE, `Max image size is 1MB.`)
  .refine(
    files => ACCEPTED_IMAGE_TYPES.includes(files.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )
  .nullable()
  .optional()

export const addNewDeckSchema = z.object({
  cover: coverSchema,
  isPrivate: z.boolean(),
  name: nameSchema,
})

export const updatesCardsSchema = z.object({
  answer: nameSchema,
  answerImg: coverSchema,
  answerVideo: z.string().optional(),
  question: nameSchema,
  questionImg: coverSchema,
  questionVideo: z.string().optional(),
})

export type PackFormType = z.infer<typeof addNewDeckSchema>
export type UpdatesCardsType = z.infer<typeof updatesCardsSchema>
