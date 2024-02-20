import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { RegisterForm, signUpSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'

type LoginProps = {
  className?: string
  onSubmit: (values: RegisterForm) => void
}

export const SignUp = ({ className, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<RegisterForm>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        Registration
      </Typography>

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
          <Typography variant={'subtitle2'}>Register</Typography>
        </Button>
      </form>

      <div className={s.signin}>
        <Typography variant={'body2'}>Already have an account?</Typography>

        <Typography className={s.signinButton} variant={'h2'}>
          <Link to={'/login'}>Login</Link>
        </Typography>
      </div>
    </div>
  )
}
