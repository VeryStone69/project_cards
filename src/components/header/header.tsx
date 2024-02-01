import { memo } from 'react'

import { Logo } from '@/assets/illustrations/logo'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { DropDownUser } from '@/features/dropdown-user/drop-down-user'

import s from './header.module.scss'

import avatar from '../../assets/images/avatar.jpg'

type Props = {
  data: ProfileData | null
  logout?: () => void
}

type ProfileData = {
  avatar: string
  email: string
  name: string
}

export const Header = memo(({ data }: Props) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Logo />
        {data ? (
          <div className={s.userInfo}>
            <Typography className={s.userName} variant={'subtitle1'}>
              {data.name || data.email}
            </Typography>
            <Dropdown
              align={'end'}
              sideOffset={-6}
              trigger={
                <button>
                  <Avatar className={s.userPhoto} src={avatar} userName={data.name} />
                </button>
              }
            >
              <DropDownUser userEmail={data.email} userName={data.name} />
            </Dropdown>
          </div>
        ) : (
          <Button variant={'secondary'}>Sign in</Button>
        )}
      </div>
    </div>
  )
})
