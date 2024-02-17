import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ProfilePhotoLoader } from '@/components/forms/profile-photo-loader'
import { Avatar } from '@/components/ui/avatar'

import s from './profile-photo.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  avatar: string | undefined
  isEdit: boolean
} & Omit<ComponentPropsWithoutRef<T>, any>
export const ProfilePhotoUpdate = <T extends ElementType = 'div'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props>
) => {
  const { as, avatar, isEdit } = props
  const Component = as || 'div'

  return (
    <Component className={s.avatarBlock}>
      <Avatar className={s.avatar} src={avatar} />
      {!isEdit && <ProfilePhotoLoader />}
    </Component>
  )
}
