import { ReactNode } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

const DropdownMenuDemo = () => {
  return (
    <div className={s['DropdownMenuRoot']}>
      <DropdownMenu.Root>
        {/*<DropdownMenu.Trigger asChild>*/}
        {/*  <img className={s['userLogo']} />*/}
        {/*</DropdownMenu.Trigger>*/}

        {/*<DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={8}>*/}
        {/*  <DropdownMenu.Arrow className={s['DropdownMenuArrow']} height={8} width={14} />*/}

        {/*  <DropDownItem*/}
        {/*    classNameItem={s.DropdownMenuItem}*/}
        {/*    classNameSVG={s.userLogo}*/}
        {/*    userEmail={'j&johnson@gmail.com'}*/}
        {/*    userName={'Ivan'}*/}
        {/*  />*/}
        {/*  <DropDownItemWithIcon*/}
        {/*    classNameItem={s.itemWithIcon}*/}
        {/*    classNameSVG={s.svgWhite}*/}
        {/*    svgId={'logoUserDrop'}*/}
        {/*    textItem={'My profile'}*/}
        {/*  />*/}
        {/*  <DropDownItemWithIcon*/}
        {/*    classNameItem={s.itemWithIcon}*/}
        {/*    classNameSVG={s.svgWhite}*/}
        {/*    svgId={'logout'}*/}
        {/*    textItem={'Sign Out'}*/}
        {/*  />*/}
        {/*</DropdownMenu.Content>*/}

        <DropdownMenu.Trigger asChild>
          <img className={s['userLogo']} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className={s['DropdownMenuContent']} sideOffset={8}>
          <DropdownMenu.Arrow className={s['DropdownMenuArrow']} height={8} width={14} />
          <DropDownItemWithIcon
            classNameItem={s.itemWithIcon}
            classNameSVG={s.svgWhite}
            svgId={'playLearn'}
            textItem={'My profile'}
          />
          <DropDownItemWithIcon
            classNameItem={s.itemWithIcon}
            classNameSVG={s.svgWhite}
            svgId={'edit'}
            textItem={'My profile'}
          />
          <DropDownItemWithIcon
            classNameItem={s.itemWithIcon}
            classNameSVG={s.svgWhite}
            svgId={'trashBin'}
            textItem={'Sign Out'}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

// collapsed?: boolean
// icon?: ReactNode
// svgId?: string
// textItem?: string

export type DropDownProps = {
  classNameItem?: string
  classNameSVG?: string
  userEmail?: string
  userName?: string
}

type DropDownWithIconProps = Pick<DropDownProps, 'classNameItem' | 'classNameSVG'> & {
  svgId?: string
  textItem?: string
}

export default DropdownMenuDemo

export const DropDownItem = (props: DropDownProps) => {
  const { classNameItem, classNameSVG, userEmail, userName } = props

  return (
    <DropdownMenu.Item className={classNameItem}>
      <img className={classNameSVG} />
      <div>
        <Typography variant={'subtitle1'}>{userName}</Typography>
        <Typography variant={'caption'}>{userEmail}</Typography>
      </div>
    </DropdownMenu.Item>
  )
}

export const DropDownItemWithIcon = (props: DropDownWithIconProps) => {
  const { classNameItem, classNameSVG, svgId, textItem } = props

  return (
    <DropdownMenu.Item className={classNameItem}>
      <Icon className={classNameSVG} name={svgId} size={'16px'} />
      <Typography variant={'caption'}>{textItem}</Typography>
    </DropdownMenu.Item>
  )
}
