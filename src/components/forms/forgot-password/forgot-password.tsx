import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './forgot-password.module.scss'

import { Button } from '../../ui/button'

const emailRegex =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const forgotPasswordSchema = z.object({
  email: z.string().trim().email('Введите действующий адрес электронной почты').regex(emailRegex),
})

export type FormValues = z.infer<typeof forgotPasswordSchema>
type LoginProps = {
  className?: string
  onSubmit: (values: FormValues) => void
}

export const ForgotPassword = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })

  const classNames = clsx(s.form, className)

  return (
      <div  className={s.formCard}>
        <Typography variant={'h1'} className={s.title}>Forgot your password?</Typography>

        <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
          <ControlledTextField control={control} label={'Email'} name={'email'}/>
          <Typography className={s.content} variant={'body2'}>
            Enter your email address and we well send you to hell
          </Typography>

          <Button fullWidth type={'submit'}>
            Send instructions
          </Button>
        </form>

        <div className={s.sendCard}>
          <Typography variant={'body2'}>Did you remember your password?</Typography>

          <Typography variant={'h2'} className={s.sendCardButton}>
            <a href={'#'}>Try logging in</a>
          </Typography>
        </div>
      </div>
  )
}
