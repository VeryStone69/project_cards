import { Link } from 'react-router-dom'

import { PATH } from '@/common/consts/routes'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './NotFound.module.scss'

import notFound from '../../assets/images/not-found.png'

export const NotFound = () => {
  return (
    <div className={s.notfound}>
      <img alt={'page not found'} src={notFound} />
      <Typography variant={'body1'}>Sorry! Page not found!</Typography>
      <Button as={Link} to={PATH.decks} variant={'primary'}>
        <Typography variant={'subtitle2'}>Back to home page </Typography>
      </Button>
    </div>
  )
}
