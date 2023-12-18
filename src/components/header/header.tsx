import { memo } from 'react'

import { Logo } from '@/assets/illustrations/logo'

import s from './header.module.scss'

import avatar from './avatar.jpg'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'

type Props = {
  data: null
  logout: () => void
}

export const Header = memo(({ data }: Props) => {
  return (
    <div className={s.header}>
      <Logo />
      {data ? (
        <div className={s.userInfo}>
          <Typography variant={'subtitle1'}>Artyom Korshykau</Typography>
          <img alt={'avatar'} className={s.userPhoto} src={avatar} />
        </div>
      ) : (
        <Typography variant={'subtitle1'}>
          <Button variant={'primary'}>Sign in</Button>
        </Typography>
      )}
    </div>
  )
})
