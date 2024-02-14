import { useForm } from 'react-hook-form'

import { Icon } from '@/components/icon/Icon'
import { Avatar } from '@/components/ui/avatar'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledFileUploader } from '@/components/ui/controlled/controlled-file-uploader/controlled-file-uploader'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'
import { useLogOutMutation, useMeQuery } from '@/services/auth-api/auth'

import s from './profile.module.scss'

export const Profile = () => {
  const { data: me } = useMeQuery()
  const [logOut] = useLogOutMutation()
  const onLogOut = () => {
    logOut()
  }
  const { control } = useForm()

  return (
    <>
      <BackButton className={s.backButton} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'h1'}>
          Personal Information
        </Typography>
        <div className={s.avatarBlock}>
          <Avatar className={s.avatar} src={me?.avatar || ''} />
          <div className={s.fileUploader}>
            <ControlledFileUploader className={s.editButton} control={control} name={'test'} />
          </div>
        </div>
        <div className={s.nameBlock}>
          <Typography variant={'h2'}>{me?.name}</Typography>
          <IconButton icon={<Icon name={'edit'} size={'17px'} />} />
        </div>
        <Typography className={s.email} variant={'body2'}>
          {me?.email}
        </Typography>
        <Typography variant={'subtitle2'}>
          <Button onClick={onLogOut} variant={'secondary'}>
            <Icon fill={'white'} name={'logout'} size={'16px'} />
            <Typography variant={'subtitle2'}>Logout</Typography>
          </Button>
        </Typography>
      </Card>
    </>
  )
}
