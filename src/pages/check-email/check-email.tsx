import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './check-email.module.scss'

import checkEmail from '../../assets/images/check-email.png'

export const CheckEmail = () => {
  const { t } = useTranslation()
  const { email } = useParams()

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        {t('check.title')}
      </Typography>

      <img alt={'check-email'} src={checkEmail} />

      <Typography className={s.text} variant={'body2'}>
        {t('check.description', { name: email })}
      </Typography>

      <Typography variant={'subtitle2'}>
        <Button as={Link} to={'/login'}>
          {t('check.back')}
        </Button>
      </Typography>
    </Card>
  )
}
