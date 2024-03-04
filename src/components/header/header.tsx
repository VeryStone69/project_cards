import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch } from '@/app/hooks'
import { PATH } from '@/common/consts/routes'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { DropDownUser } from '@/features/dropdown-user/drop-down-user'
import { useLogOutMutation } from '@/services/auth-api/auth'
import { packsActions } from '@/store/packs-slice/packs-slice'
import { errorNotification } from '@/utils/error-notification/error-notification'

import s from './header.module.scss'

import logo from '../../assets/images/logo.png'

type ProfileData = {
  avatar?: string
  email?: string
  userName?: string
}

export const Header = memo(({ avatar, email, userName }: ProfileData) => {
  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onLogOut = async () => {
    try {
      await toast.promise(logOut().unwrap(), {
        pending: 'Logout...',
        success: 'You have successfully logged out of your account!',
      })
      dispatch(packsActions.resetFilters())
    } catch (err) {
      errorNotification(err)
    }
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.logo} onClick={() => navigate(PATH.base)}>
          <img alt={'logo'} src={logo} />
        </div>

        {userName && (
          <div className={s.userInfo}>
            <Typography
              className={s.userName}
              onClick={() => navigate(PATH.profile)}
              variant={'subtitle1'}
            >
              {userName}
            </Typography>
            <Dropdown
              align={'end'}
              sideOffset={2}
              trigger={
                <button style={{ display: 'flex' }}>
                  <Avatar src={avatar} userName={userName} />
                </button>
              }
            >
              <DropDownUser
                onlogOut={onLogOut}
                userEmail={email}
                userLogo={avatar}
                userName={userName}
              />
            </Dropdown>
          </div>
        )}
        {!userName && (
          <Button as={Link} to={PATH.register} variant={'secondary'}>
            <Typography variant={'subtitle2'}>Register</Typography>
          </Button>
        )}
      </div>
    </div>
  )
})
