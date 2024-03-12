import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './NotFound.module.scss'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className={s.notfound}>
      <Icon className={s.icon} fill={'black'} name={'notFound'} viewBox={'0 0 451 192'} />
      <Typography variant={'body1'}>{t('notFound.title')}</Typography>
      <Button as={Link} to={PATH.decks} variant={'primary'}>
        <Typography variant={'subtitle2'}>{t('notFound.back')}</Typography>
      </Button>
    </div>
  )
}
