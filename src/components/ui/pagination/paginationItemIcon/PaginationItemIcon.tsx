import { ReactNode } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'

import s from '@/components/ui/pagination/pagination.module.scss'
type ButtonType = 'next' | 'previous'
type PaginationIconProps = {
  buttonStyle?: string
  children?: ReactNode
  disabled: boolean
  onClick: (type: ButtonType) => void
  type: ButtonType
}
export const PaginationItemIcon = ({
  buttonStyle,
  children,
  disabled,
  onClick,
  type,
}: PaginationIconProps) => {
  const icon =
    (type === 'previous' && s.iconButtonPrevious) || (type === 'next' && s.iconButtonNext) || ''
  const buttonDisabled = disabled ? s.buttonDisabled : s.button + ' ' + s.buttonCustom
  const button = buttonStyle ? s.button + ' ' + buttonStyle : buttonDisabled

  const onClickSelectPage = () => {
    onClick(type)
  }

  return (
    <Button className={button} disabled={disabled} onClick={onClickSelectPage}>
      {children ? children : <Icon className={icon} name={'arrowDown'} />}
    </Button>
  )
}
