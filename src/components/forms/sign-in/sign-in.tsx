import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { FormValues, SignInSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from './sign-in.module.scss'

import { Button } from '../../ui/button'

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
  const { t } = useTranslation()

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        {t('login.title')}
      </Typography>

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          className={s.email}
          control={control}
          label={t('login.email')}
          name={'email'}
        />

        <ControlledTextField
          className={s.password}
          control={control}
          label={t('login.password')}
          name={'password'}
          type={'password'}
        />

        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={t('login.remember')}
          name={'rememberMe'}
        />

        <Typography className={s.forgot} variant={'body2'}>
          <Link className={s.forgotLink} to={PATH.recover}>
            {t('login.forgot')}
          </Link>
        </Typography>

        <Button className={s.button} fullWidth>
          <Typography variant={'subtitle2'}>{t('login.login')}</Typography>
        </Button>
      </form>

      <div className={s.signup}>
        <Typography variant={'body2'}>{t('login.noAcc')}</Typography>

        <Typography className={s.register} variant={'h2'}>
          <Link className={s.registerLink} to={PATH.register}>
            {t('login.register')}
          </Link>
        </Typography>
      </div>
    </div>
  )
}
