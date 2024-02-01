import { ReactNode } from 'react'

import { DropDownHeaderProps } from '@/components/ui/dropdown/dropdown-item-header'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type DropDownWithIconProps = Omit<DropDownHeaderProps, 'userEmail' | 'userName'> & {
  icon?: ReactNode
  onSelect?: (event: Event) => void
  title?: string
}
export const DropdownItemContent = ({
  className,
  icon,
  onSelect,
  style,
  title,
  ...props
}: DropDownWithIconProps) => {
  return (
    <DropdownMenu.Item className={className} onSelect={onSelect} style={style} {...props}>
      {icon}
      <Typography variant={'caption'}>{title}</Typography>
    </DropdownMenu.Item>
  )
}
