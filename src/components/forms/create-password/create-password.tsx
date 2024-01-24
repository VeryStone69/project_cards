import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './create-password.module.scss'

import { Button } from '../../ui/button'

const createPasswordSchema = z.object({
  password: z
    .string()
    .min(3, 'Пароль должен быть не менее 3 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
})

export type FormValues = z.infer<typeof createPasswordSchema>
type LoginProps = {
  className?: string
  onSubmit: (values: FormValues) => void
}

export const CreatePassword = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(createPasswordSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          label={'New password'}
          name={'password'}
          type={'password'}
        />

        <Typography className={s.content} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>

        <Button fullWidth type={'submit'}>
          Create new password
        </Button>
      </form>
    </div>
  )
}
