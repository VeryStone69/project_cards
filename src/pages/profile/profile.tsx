import { Icon } from '@/components/icon/Icon'
import { Layout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/file-uploader'
import { Typography } from '@/components/ui/typography'

import s from './profile.module.scss'

import avatar from '../../assets/images/avatar.jpg'

export const Profile = () => {
  return (
    <Layout>
      <div className={s.profilePage}>
        <Card className={s.card}>
          <Typography className={s.title} variant={'h1'}>
            Personal Information
          </Typography>
          <div className={s.avatarBlock}>
            <img alt={'avatar'} className={s.avatar} src={avatar} />
            <div className={s.fileUploader}>
              <FileUploader />
            </div>
          </div>
          <div className={s.nameBlock}>
            <Typography variant={'h2'}>Artyom</Typography>
            <Icon fill={'white'} height={'17px'} name={'edit'} width={'17px'} />
          </div>
          <Typography className={s.email} variant={'body2'}>
            example@gmail.com
          </Typography>
          <Typography variant={'subtitle2'}>
            <Button variant={'secondary'}>Logout</Button>
          </Typography>
        </Card>
      </div>
    </Layout>
  )
}
