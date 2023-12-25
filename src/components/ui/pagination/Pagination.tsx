import { useState } from 'react'

import { PaginationItem } from '@/components/ui/pagination/paginationItem/PaginationItem'
import { PaginationItemIcon } from '@/components/ui/pagination/paginationItemIcon/PaginationItemIcon'
import { PaginationSize } from '@/components/ui/pagination/paginationPageSize/PaginationSize'
import usePagination from '@/components/ui/pagination/usePagination'

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
  size?: 'large' | 'medium' | 'small'
  totalPages: number
}

export const Pagination = ({ totalPages }: PaginationProps) => {
  const [currentItems, setCurrentPage] = useState('1')
  const { pageSizeSelect, paginationItems } = usePagination({ currentItems, totalPages })

  return (
    <nav className={s.navigation}>
      <PaginationItemIcon onClick={() => {}} type={'previous'} />
      {paginationItems.map(item => {
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
      <PaginationItemIcon onClick={() => {}} type={'next'} />
      <PaginationSize
        currentItems={currentItems}
        onChangePageSize={setCurrentPage}
        pageSizeSelect={pageSizeSelect}
      />
    </nav>
  )
}
