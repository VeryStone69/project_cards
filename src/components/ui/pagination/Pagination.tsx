import { ChangeEvent, ReactNode } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './pagination.module.scss'


// type RenderItem = {
//   /**
//    * The total number of pages.
//    * @default 1
//    */
//   count?: number
//   /**
//    * The page selected by default when the component is uncontrolled.
//    * @default 1
//    */
//   defaultPage?: number
//   /**
//    * If `true`, the component is disabled.
//    * @default false
//    */
//   disabled?: boolean
//   /**
//    * Callback fired when the page is changed.
//    *
//    * @param {ChangeEvent} event The event source of the callback.
//    * @param {number} page The page selected.
//    */
//   onChange?: (event: ChangeEvent, page: number) => void
//   /**
//    * The current page.
//    */
//   page?: number
// }
type PaginationProps = {
  className?: string
  color?: 'primary' | 'secondary' | 'standard'
  count?: number
  size?: 'large' | 'medium' | 'small'
}

export const Pagination = ({ count }: PaginationProps) => {
  const data = [
    { title: '5', value: '5' },
    { title: '7', value: '7' },
    { title: '10', value: '10' },
    { title: '15', value: '15' },
    { title: '20', value: '20' },
  ]

  const { items } = usePagination({ count })

  return (
    <nav className={s.navigation}>
      <PaginationItemIcon type={'previous'} />
      {items.map(item => {
        return (
          <PaginationItem
            key={item.page}
            onClick={item.onClick}
            page={item.page}
            selected={item.selected}
            type={item.type}
          />
        )
      })}
      <PaginationItemIcon type={'next'} />
      <Typography className={s.typographyShow} variant={'body2'}>
        Показать
      </Typography>
      <div style={{ height: '24px', width: '50px' }}>
        <Select onValueChange={() => {}} options={data} placeholder={'test'} sizeSelect={'small'} />
      </div>
      <Typography className={s.typographyPage} variant={'body2'}>
        на странице
      </Typography>
    </nav>
  )
}
type PaginationItem = {
  onClick: (page: number) => void
  page: number
  selected: boolean
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}

const PaginationItem = ({ onClick, page, selected }: PaginationItem) => {
  const onClickButtonPage = () => {
    console.log(selected)
    onClick(page)
  }

  return (
    <Button className={s.button} onClick={onClickButtonPage}>
      <Typography variant={'body2'}>{page}</Typography>
    </Button>
  )
}

type PaginationItemIcon = {
  buttonStyle?: string
  children?: ReactNode
  onClick: () => void
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}
const PaginationItemIcon = ({ buttonStyle, children, type }: PaginationItemIcon) => {
  const icon =
    (type === 'previous' && s.iconButtonPrevious) || (type === 'next' && s.iconButtonNext) || ''
  const button = buttonStyle ? s.button + ' ' + buttonStyle : s.button + ' ' + s.buttonCustom

  return (
    <Button className={button}>
      {children ? children : <Icon className={icon} name={'arrowDown'} />}
    </Button>
  )
}

export type UsePaginationProps = {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
  /**
   * The current page.
   */
  page?: number
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number
}
export type UsePaginationItem = {
  onClick: (page: number) => void
  page: null | number
  selected: boolean
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}

export type UsePaginationResult = {
  items: UsePaginationItem[]
}

export default function usePagination({ count }: UsePaginationProps): UsePaginationResult {
  const onClick = (page: number) => {
    console.log(page)
  }



  return {
    items: [
      { onClick, page: 1, selected: false, type: 'page' },
      { onClick, page: 2, selected: false, type: 'page' },
      { onClick, page: 3, selected: false, type: 'page' },
      { onClick, page: 4, selected: true, type: 'page' },
    ],
  }
}
