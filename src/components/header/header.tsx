import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useAppDispatch } from '@/app/hooks'
import { Logo } from '@/assets/illustrations/logo'
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

type ProfileData = {
  avatar?: string
  email?: string
  userName?: string
}

type Locales = {
  en: { title: 'English' }
  ru: { title: 'Русский' }
}

export const Header = memo(({ avatar, email, userName }: ProfileData) => {
  const locales: Locales = {
    en: { title: 'English' },
    ru: { title: 'Русский' },
  }
  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { i18n, t } = useTranslation()
  const onLogOut = async () => {
    try {
      await toast.promise(logOut().unwrap(), {
        pending: t('header.toast.pending'),
        success: t('header.toast.success'),
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
          <Logo />
        </div>

        <div style={{ display: 'flex', gap: '5px' }}>
          {Object.keys(locales).map(el => (
            <Typography key={el} variant={'subtitle2'}>
              <Button
                onClick={() => i18n.changeLanguage(el)}
                variant={i18n.resolvedLanguage === el ? 'primary' : 'secondary'}
              >
                {locales[el as keyof Locales].title}
              </Button>
            </Typography>
          ))}
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
                onLogOut={onLogOut}
                userEmail={email}
                userLogo={avatar}
                userName={userName}
              />
            </Dropdown>
          </div>
        )}

        {!userName && (
          <Button as={Link} to={PATH.register} variant={'secondary'}>
            <Typography variant={'subtitle2'}>{t('header.register')}</Typography>
          </Button>
        )}
      </div>
    </div>
  )
})
