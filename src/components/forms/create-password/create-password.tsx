import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import {
  CreateNewPasswordForm,
  resetPasswordSchema,
} from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from './create-password.module.scss'

import { Button } from '../../ui/button'

type LoginProps = {
  className?: string
  onSubmit: (values: CreateNewPasswordForm) => void
}

export const CreatePassword = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<CreateNewPasswordForm>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(resetPasswordSchema),
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

        <Typography variant={'subtitle2'}>
          <Button fullWidth type={'submit'}>
            Create
          </Button>
        </Typography>
      </form>
    </div>
  )
}
