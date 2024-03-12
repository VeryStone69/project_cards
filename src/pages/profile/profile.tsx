import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BackButton } from '@/components/ui/back-button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ProfileNameUpdate } from '@/features/profile-name-update/profile-name-update'
import { ProfilePhotoUpdate } from '@/features/profile-photo-update/profile-photo-update'
import { useMeQuery } from '@/services/auth-api/auth'

import s from './profile.module.scss'

export const Profile = () => {
  const { data: me } = useMeQuery()
  const [isEdit, setEdit] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <BackButton className={s.backButton} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'h1'}>
          {t('profile.title')}
        </Typography>
        <ProfilePhotoUpdate avatar={me?.avatar || ''} isEdit={isEdit} userName={me?.name} />
        <ProfileNameUpdate email={me?.email} isEdit={isEdit} name={me?.name} setEdit={setEdit} />
      </Card>
    </>
  )
}
