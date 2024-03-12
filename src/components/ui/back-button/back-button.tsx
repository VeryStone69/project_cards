import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './back-button.module.scss'

type Props = {
  className?: string
  text?: string
}

export const BackButton = ({ className, text = 'Back to Previous Page', ...props }: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const classes = clsx(s.button, className)
  const backHandler = () => {
    navigate(-1)
  }

  return (
    <Button
      as={Link}
      className={classes}
      onClick={backHandler}
      relative={'path'}
      to={'..'}
      variant={'link'}
      {...props}
    >
      <Icon name={'arrow-back'} />
      <Typography className={s.text} variant={'body2'}>
        {t('rules.back')}
      </Typography>
    </Button>
  )
}
