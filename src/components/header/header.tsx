import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '@/assets/illustrations/logo'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { DropDownUser } from '@/features/dropdown-user/drop-down-user'
import { useLogOutMutation } from '@/services/auth-api/auth'

import s from './header.module.scss'

type ProfileData = {
  avatar: string
  email: string
  isAuthenticated: boolean
  userName: string
}

export const Header = memo(({ avatar, email, isAuthenticated, userName }: ProfileData) => {
  const [logOut] = useLogOutMutation()
  const onlogOut = () => {
    logOut()
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Logo />
        {isAuthenticated ? (
          <div className={s.userInfo}>
            <Typography className={s.userName} variant={'subtitle1'}>
              {userName}
            </Typography>
            <Dropdown
              align={'end'}
              sideOffset={2}
              trigger={
                <button>
                  <Avatar src={avatar} userName={userName} />
                </button>
              }
            >
              <DropDownUser
                onlogOut={onlogOut}
                userEmail={email}
                userLogo={avatar}
                userName={userName}
              />
            </Dropdown>
          </div>
        ) : (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Sign in</Typography>
          </Button>
        )}
      </div>
    </div>
  )
})
