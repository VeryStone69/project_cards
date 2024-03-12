import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <div className={s.formCard}>
      <Typography className={s.title} variant={'h1'}>
        {t('recovery.title')}
      </Typography>

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField control={control} label={t('recovery.email')} name={'email'} />
        <Typography className={s.content} variant={'body2'}>
          {t('recovery.subtitle')}
        </Typography>

        <Button fullWidth type={'submit'}>
          <Typography variant={'subtitle2'}>{t('recovery.send')}</Typography>
        </Button>
      </form>

      <div className={s.sendCard}>
        <Typography variant={'body2'}>{t('recovery.remember')}</Typography>

        <Typography className={s.sendCardButton} variant={'h2'}>
          <Link to={'/login'}>{t('recovery.login')}</Link>
        </Typography>
      </div>
    </div>
  )
}
