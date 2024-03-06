import { PaginationItem } from '@/components/ui/pagination/paginationItem/PaginationItem'
import { PaginationItemIcon } from '@/components/ui/pagination/paginationItemIcon/PaginationItemIcon'
import { PaginationSize } from '@/components/ui/pagination/paginationPageSize/PaginationSize'
import usePagination from '@/components/ui/pagination/usePagination'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

type PaginationProps = {
  className?: string
  currentPage: number
  itemsPerPage: number
  onChangeItemsPerPage: (page: number) => void
  onChangePage: (page: number) => void
  siblingCount?: number
  totalPages?: number
}

export const Pagination = ({
  className,
  currentPage,
  itemsPerPage,
  onChangeItemsPerPage,
  onChangePage,
  siblingCount = 1,
  totalPages = 10,
}: PaginationProps) => {
  const {
    hideNextButton,
    hidePrevButton,
    onClickChangeCurrentPage,
    pageSizeSelect,
    paginationItems,
  } = usePagination({
    currentPage,
    itemsPerPage,
    onChangePage,
    siblingCount,
    totalPages,
  })
  const navigationBlock = clsx(s.navigationBlock, className)

  return (
    <nav className={navigationBlock}>
      <div className={s.navigation}>
        <PaginationItemIcon
          disabled={hidePrevButton}
          onClick={onClickChangeCurrentPage}
          type={'previous'}
        />
        {paginationItems.map((item, index) => {
          if (item.type === 'dods') {
            return (
              <div className={s.dods} key={index}>
                ...
              </div>
            )
          }

          return (
            <PaginationItem
              currentPage={currentPage}
              key={index}
              onClickChangePage={item.onClickChangePage}
              page={item.page}
              pagesTotal={totalPages}
              type={item.type}
            />
          )
        })}
        <PaginationItemIcon
          disabled={hideNextButton}
          onClick={onClickChangeCurrentPage}
          type={'next'}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <PaginationSize
          itemsPerPage={itemsPerPage}
          onChangeItemsPerPage={onChangeItemsPerPage}
          pageSizeSelect={pageSizeSelect}
        />
      </div>
    </nav>
  )
}
