import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
// import {
//   HamburgerMenuIcon,
//   DotFilledIcon,
//   CheckIcon,
//   ChevronRightIcon,
import { Icon } from '@/components/icon/Icon'
// } from '@radix-ui/react-icons';
import { Typography } from '@/components/ui/typography'

import s from './dropdown.module.scss'

const DropdownMenuDemo = () => {
  // const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  // const [urlsChecked, setUrlsChecked] = React.useState(false)
  // const [person, setPerson] = React.useState('pedro')

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <img className={s['userLogo']} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={5}>
          <DropdownMenu.Arrow className={s['DropdownMenuArrow']}>
            <Icon name={'beak-container-top'} />
          </DropdownMenu.Arrow>
          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            <img className={s['userLogo']} />
            <div className={s['userDataName']}>
              <Typography variant={'subtitle1'}>Ivan</Typography>
            </div>
            <div className={s['userDataEmail']}>
              <Typography variant={'caption'}>j&johnson@gmail.com</Typography>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s['DropdownMenuSeparator']} />
          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            <Icon name={'logoUserDrop'} />
            My Profile
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s['DropdownMenuSeparator']} />
          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            <Icon name={'logout'} />
            Sign Out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
