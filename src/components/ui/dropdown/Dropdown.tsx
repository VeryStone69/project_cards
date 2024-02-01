import { ReactNode, forwardRef, useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type Props = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  sideOffset?: number
  trigger?: ReactNode
}
export const Dropdown = forwardRef<any, Props>(
  ({ align = 'end', children, className, sideOffset = 8, trigger }, ref) => {
    const [open, setOpen] = useState(false)

    return (
      <DropdownMenu.Root onOpenChange={setOpen} open={open}>
        <DropdownMenu.Trigger asChild ref={ref}>
          {trigger ?? (
            <IconButton
              className={className ? className : s.btn}
              icon={<Icon name={'more'} size={'24px'} />}
            />
          )}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          align={align}
          className={s.DropdownMenuContent}
          sideOffset={sideOffset}
        >
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} height={10} width={14} />
          <DropdownMenu.Arrow className={s.DropdownMenuTwoArrow} height={10} width={14} />
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    )
  }
)
