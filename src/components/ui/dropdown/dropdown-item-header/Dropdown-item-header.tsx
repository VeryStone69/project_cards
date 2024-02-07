import { ComponentPropsWithoutRef } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-item-header.module.scss'

export type DropDownHeaderProps = {
  className?: string
  onSelect?: (event: Event) => void
  userEmail?: string
  userLogo: string
  userName: string
} & ComponentPropsWithoutRef<'div'>
export const DropdownItemHeader = ({
  className,
  onSelect,
  style,
  userEmail,
  userLogo,
  userName,
  ...props
}: DropDownHeaderProps) => {
  return (
    <DropdownMenu.Item className={className} onSelect={onSelect} style={style} {...props}>
      <Avatar className={s.avatar} src={userLogo} />
      <div>
        <Typography variant={'subtitle2'}>{userName}</Typography>
        <Typography className={s.caption} variant={'caption'}>
          {userEmail}
        </Typography>
      </div>
    </DropdownMenu.Item>
  )
}
