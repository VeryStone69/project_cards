import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Icon } from '@/components/icon/Icon'
import { DropdownItemContent, DropdownItemHeader } from '@/components/ui/dropdown'

import s from './drop-down-user.module.scss'

type Props = {
  onLogOut?: () => void
  userEmail?: string
  userLogo?: string
  userName: string
}
export const DropDownUser = ({ onLogOut, userEmail, userLogo, userName }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const onSelected = () => {
    navigate('/profile')
  }

  return (
    <>
      <DropdownItemHeader
        className={s.DropdownMenuItem}
        userEmail={userEmail}
        userLogo={userLogo}
        userName={userName}
      />
      <DropdownItemContent
        className={s.itemWithIcon}
        icon={<Icon className={s.svgWhite} name={'logoUserDrop'} size={'16px'} />}
        onSelect={onSelected}
        title={t('header.dropdown.profile')}
      />
      <DropdownItemContent
        className={s.itemWithIcon}
        icon={<Icon className={s.svgWhite} name={'logout'} size={'16px'} />}
        onlogOut={onLogOut}
        title={t('header.dropdown.logout')}
      />
    </>
  )
}
