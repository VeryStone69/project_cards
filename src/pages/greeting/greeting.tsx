import { Link, useNavigate } from 'react-router-dom'

import { Icon } from '@/components/icon/Icon'
import { PATH } from '@/common/consts/routes'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './greeting.module.scss'

export const Greeting = () => {
  const navigate = useNavigate()

  return (
    <div className={s.wrapper}>
      <Card className={s.greetingCard}>
        <Typography className={s.title} variant={'h1'}>
          Welcome to the web version of the popular game Flash Cards!
        </Typography>

        <Icon height={'100px'} name={'logo'} viewBox={'0 0 1400 2200'} width={'60px'} />

        <Typography className={s.description} variant={'subtitle2'}>
          Quiz Decks is a web version of the Flash Cards game. It offers a convenient and
          interactive way to play without the need for physical cards. It allows users to create
          their own decks of flashcards and effectively learn new topics and concepts. Playing Flash
          Cards on your website offers a fun and effective learning tool that will help players
          improve their knowledge and remember important information.
        </Typography>

        <Button onClick={() => navigate('/login')} variant={'primary'}>
          <Typography variant={'subtitle2'}>Login to start training!</Typography>
        </Button>

        <Typography className={s.rules} variant={'caption'}>
          You can also learn the
          <Link className={s.rulesLink} to={PATH.rules}>
            rules
          </Link>
          of the game.
        </Typography>
      </Card>
    </div>
  )
}
