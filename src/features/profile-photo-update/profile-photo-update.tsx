import { ComponentPropsWithoutRef, ElementType } from 'react'

import { Avatar } from '@/components/ui/avatar'

import s from './profile-photo.module.scss'

import { ProfilePhotoLoader } from '../profile-photo-loader'

type Props<T extends ElementType = 'div'> = {
  as?: T
  avatar: string | undefined
  isEdit: boolean
  userName?: string
} & Omit<ComponentPropsWithoutRef<T>, any>
export const ProfilePhotoUpdate = <T extends ElementType = 'div'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props>
) => {
  const { as, avatar, isEdit, userName = '' } = props
  const Component = as || 'div'

  return (
    <Component className={s.avatarBlock}>
      <Avatar className={s.avatar} src={avatar} userName={userName} />
      {!isEdit && <ProfilePhotoLoader avatar={avatar} />}
    </Component>
  )
}
