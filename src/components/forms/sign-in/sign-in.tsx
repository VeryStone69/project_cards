import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button'

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const SignInSchema = z.object({
  email: z.string().trim().email('Введите действующий адрес электронной почты').regex(emailRegex),
  password: z
    .string()
    .min(3, 'Пароль должен быть не менее 3 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof SignInSchema>
type LoginProps = {
  className?: string
  onSubmit: (values: FormValues) => void
}

export const SignIn = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(SignInSchema),
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

        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />

        <Button className={s.button} fullWidth type={'submit'}>
          Sign in
        </Button>
      </form>
    </>
  )
}
