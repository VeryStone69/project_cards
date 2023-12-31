import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const SignUpSchema = z.object({
  confirmPassword: z
    .string()
    .min(3, 'Пароль должен быть не менее 3 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
  email: z.string().trim().email('Введите действующий адрес электронной почты').regex(emailRegex),
  password: z
    .string()
    .min(3, 'Пароль должен быть не менее 3 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof SignUpSchema>
type LoginProps = {
  className?: string
  onSubmit: (values: FormValues) => void
}

export const SignUp = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(SignUpSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <>
      <DevTool control={control} />

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField className={s.email} control={control} label={'Email'} name={'email'} />

        <ControlledTextField
          className={s.password}
          control={control}
          label={'Password'}
          name={'password'}
          type={'password'}
        />

        <ControlledTextField
          className={s.conformPassword}
          control={control}
          label={'Confirm password'}
          name={'confirmPassword'}
          type={'password'}
        />

        <Button className={s.button} fullWidth type={'submit'}>
          Sign up
        </Button>
      </form>
    </>
  )
}
