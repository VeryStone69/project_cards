import { ReactNode } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'

import s from '@/components/ui/pagination/pagination.module.scss'

type PaginationItemIcon = {
  buttonStyle?: string
  children?: ReactNode
  onClick: () => void
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}
export const PaginationItemIcon = ({ buttonStyle, children, type }: PaginationItemIcon) => {
  const icon =
    (type === 'previous' && s.iconButtonPrevious) || (type === 'next' && s.iconButtonNext) || ''
  const button = buttonStyle ? s.button + ' ' + buttonStyle : s.button + ' ' + s.buttonCustom

  return (
    <Button className={button}>
      {children ? children : <Icon className={icon} name={'arrowDown'} />}
    </Button>
  );
};