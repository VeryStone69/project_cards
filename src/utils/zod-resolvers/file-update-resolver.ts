import { z } from 'zod'

const MAX_FILE_SIZE = 1024 * 1024
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
const emailValid = z.string().trim().email('Enter a valid email address').regex(emailRegex)
const passwordValid = z
  .string()
  .min(3, 'The password must be at least 3 characters')
  .max(30, 'The password must be no more than 30 characters')
const nameValid = z
  .string()
  .trim()
  .min(3, 'The name must be at least 3 characters')
  .max(30, 'the name must be no more than 30 characters')

export const coverSchema = z
  .instanceof(File)
  .refine(files => files.size <= MAX_FILE_SIZE, `Max image size is 1MB.`)
  .refine(
    files => ACCEPTED_IMAGE_TYPES.includes(files.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  )
  .nullable()
  .optional()
export const editProfileSchema = z.object({
  name: z
    .string()
    .trim()
    .max(30, { message: '\n' + 'The name must be no more than 30 characters' })
    .min(7, { message: 'The name must be at least 7 characters' }),
})

export const addNewDeckSchema = z.object({
  cover: coverSchema,
  isPrivate: z.boolean(),
  name: nameValid,
})

export const signUpSchema = z
  .object({
    confirmPassword: passwordValid,
    email: emailValid,
    password: passwordValid,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignInSchema = z.object({
  email: emailValid,
  password: passwordValid,
  rememberMe: z.boolean().optional(),
})

export const forgotPasswordSchema = z.object({
  email: emailValid,
})
export const resetPasswordSchema = z.object({
  password: passwordValid,
})
export type FormValuesForgotPassword = z.infer<typeof forgotPasswordSchema>
export type FormValues = z.infer<typeof SignInSchema>
export type PackFormType = z.infer<typeof addNewDeckSchema>
export type RegisterForm = z.infer<typeof signUpSchema>
export type CreateNewPasswordForm = z.infer<typeof resetPasswordSchema>
