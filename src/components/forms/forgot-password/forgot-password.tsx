import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import {
  FormValuesForgotPassword,
  forgotPasswordSchema,
} from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from './forgot-password.module.scss'

import { Button } from '../../ui/button'

type LoginProps = {
  className?: string
  onSubmit: (values: FormValuesForgotPassword) => void
}

export const ForgotPassword = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValuesForgotPassword>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        Password recovery
      </Typography>

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField control={control} label={'Email'} name={'email'} />
        <Typography className={s.content} variant={'body2'}>
          Enter your email address and we well send you to hell
        </Typography>

        <Button fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>Send</Typography>
        </Button>
      </form>

      <div className={s.sendCard}>
        <Typography variant={'body2'}>Did you remember your password?</Typography>

        <Typography className={s.sendCardButton} variant={'h2'}>
          <Link to={'/login'}>Login</Link>
        </Typography>
      </div>
    </div>
  )
}
