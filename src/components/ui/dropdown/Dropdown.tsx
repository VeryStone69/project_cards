import { Icon } from '@/components/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

const DropdownMenuDemo = () => {
  return (
    <div className={s['DropdownMenuRoot']}>
      <DropdownMenu.Root open>
        <DropdownMenu.Trigger asChild>
          <img className={s['userLogo']} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={8}>
          <DropdownMenu.Arrow className={s['DropdownMenuArrow']} height={8} width={14} />
          <DropDownItem />
          <DropDownItemWithIcon />
          <DropDownItemWithIcon />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default DropdownMenuDemo

export const DropDownItem = () => {
  return (
    <DropdownMenu.Item className={s['DropdownMenuItem']}>
      <img className={s['userLogo']} />
      <div>
        <Typography variant={'subtitle1'}>Ivan</Typography>
        <Typography variant={'caption'}>j&johnson@gmail.com</Typography>
      </div>
    </DropdownMenu.Item>
  )
}

export const DropDownItemWithIcon = () => {
  return (
    <div className={s['item-with-icon']}>
      <Icon className={s['svg-white']} name={'logoUserDrop'} size={'16px'} />
      <Typography variant={'caption'}>Ivan</Typography>
    </div>
  )
}
