import { forwardRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type Props = {
  className?: string
  src?: string
  userName: string
}
export const Avatar = forwardRef<any, Props>(({ className, src, userName = '', ...props }, ref) => {
  const userNames = userName.length > 4 ? userName[0] : userName

  return (
    <AvatarRadix.Root className={className ? className : s.avatarRoot} ref={ref} {...props}>
      <AvatarRadix.Image alt={'User Avatar'} className={s.image} src={src} />
      {!src && (
        <AvatarRadix.Fallback className={s.avatarFallback}>{userNames}</AvatarRadix.Fallback>
      )}
    </AvatarRadix.Root>
  )
})
