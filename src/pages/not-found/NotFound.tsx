import { Link } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={s.notfound}>
      <Icon className={s.icon} fill={'black'} name={'notFound'} viewBox={'0 0 451 192'} />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button as={Link} to={PATH.decks} variant={'primary'}>
        <Typography variant={'subtitle2'}>Back to home page </Typography>
      </Button>
    </div>
  )
}
