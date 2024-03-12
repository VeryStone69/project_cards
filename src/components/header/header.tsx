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
import { Option, Select } from '@/components/ui/select'
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

export const Header = memo(({ avatar, email, userName }: ProfileData) => {
  const locales: Option[] = [
    { title: 'English', value: 'en' },
    { title: 'Русский', value: 'ru' },
    { title: '中國人', value: 'zh' },
    { title: 'Polski', value: 'pl' },
    { title: 'Deutsch', value: 'de' },
    { title: 'Latviski', value: 'lv' },
    { title: 'Беларускі', value: 'by' },
  ]

  const { i18n, t } = useTranslation()

  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
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

        <div className={s.loginData}>
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

          <Select
            className={s.langSelect}
            onValueChange={value => i18n.changeLanguage(value)}
            options={locales}
            sizeSelect={'small'}
            value={i18n.resolvedLanguage}
          />
        </div>
      </div>
    </div>
  )
})
