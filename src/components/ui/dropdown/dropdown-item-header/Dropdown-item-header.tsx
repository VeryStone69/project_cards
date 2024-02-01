import { ComponentPropsWithoutRef } from 'react'

import logo from '@/assets/images/avatar.jpg'
import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-item-header.module.scss'

export type DropDownHeaderProps = {
  className?: string
  onSelect?: (event: Event) => void
  userEmail?: string
  userName: string
} & ComponentPropsWithoutRef<'div'>
export const DropdownItemHeader = ({
  className,
  onSelect,
  style,
  userEmail,
  userName,
  ...props
}: DropDownHeaderProps) => {
  return (
    <DropdownMenu.Item className={className} onSelect={onSelect} style={style} {...props}>
      <Avatar className={s.avatar} src={logo} />
      <div>
        <Typography variant={'subtitle1'}>{userName}</Typography>
        <Typography className={s.caption} variant={'caption'}>
          {userEmail}
        </Typography>
      </div>
    </DropdownMenu.Item>
  )
}
