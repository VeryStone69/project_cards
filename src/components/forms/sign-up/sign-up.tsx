import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        {t('register.title')}
      </Typography>

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.email}
          control={control}
          label={t('register.email')}
          name={'email'}
        />

        <ControlledTextField
          className={s.password}
          control={control}
          label={t('register.password')}
          name={'password'}
          type={'password'}
        />

        <ControlledTextField
          className={s.conformPassword}
          control={control}
          label={t('register.confirm')}
          name={'confirmPassword'}
          type={'password'}
        />

        <Button className={s.button} fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>{t('register.register')}</Typography>
        </Button>
      </form>

      <div className={s.signin}>
        <Typography variant={'body2'}>{t('register.haveAcc')}</Typography>

        <Typography className={s.signinButton} variant={'h2'}>
          <Link to={'/login'}>{t('register.login')}</Link>
        </Typography>
      </div>
    </div>
  )
}
