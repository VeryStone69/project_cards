import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
// import {
//   HamburgerMenuIcon,
//   DotFilledIcon,
//   CheckIcon,
//   ChevronRightIcon,
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
          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            <div>
              <img className={s['userLogo']} />
              <Typography variant={'subtitle1'}>Ivan</Typography>
            </div>
            <div>
              <Typography variant={'caption'}>j&johnson@gmail.com</Typography>
            </div>

            {/*<div className={'RightSlot'}>⌘+T</div>*/}
          </DropdownMenu.Item>

          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            My Profile
            {/*<div className={'RightSlot'}>⌘+T</div>*/}
          </DropdownMenu.Item>

          <DropdownMenu.Item className={s['DropdownMenuItem']}>
            Sign Out
            {/*<div className={'RightSlot'}>⌘+T</div>*/}
          </DropdownMenu.Item>

          <DropdownMenu.Separator className={'DropdownMenuSeparator'} />

          {/*<DropdownMenu.Label className={'DropdownMenuLabel'}>People</DropdownMenu.Label>*/}
          {/*<DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>*/}
          {/*  <DropdownMenu.RadioItem className={'DropdownMenuRadioItem'} value={'pedro'}>*/}
          {/*    <DropdownMenu.ItemIndicator className={'DropdownMenuItemIndicator'}>*/}
          {/*      /!*<DotFilledIcon />*!/*/}
          {/*    </DropdownMenu.ItemIndicator>*/}
          {/*    Pedro Duarte*/}
          {/*  </DropdownMenu.RadioItem>*/}
          {/*</DropdownMenu.RadioGroup>*/}

          {/*<DropdownMenu.Arrow className={'DropdownMenuArrow'} />*/}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropdownMenuDemo
