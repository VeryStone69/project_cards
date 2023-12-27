import { Option } from '@/components/ui/select'

export default function usePagination({
  currentPage,
  itemsPerPage,
  onChangePage,
  siblingCount = 1,
  totalPages,
}: UsePaginationProps): UsePaginationResult {
  const pageSizeSelect = [
    { title: '1', value: '1' },
    { title: '2', value: '2' },
    { title: '3', value: '3' },
    { title: '4', value: '4' },
    { title: '5', value: '5' },
  ]
  const totalElements = Math.ceil(totalPages / +itemsPerPage)
  const onClickChangePage = (page: number) => {
    onChangePage(page)
  }
  const lastPage = { onClickChangePage, page: totalPages }

  let paginationItems
  const dots = { type: 'dods' }
  const totalPageNumbers = siblingCount + 5

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalElements)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalElements - 2

  const firstPageIndex = { onClickChangePage, page: 1 }

  const siblingPage = (first: number, last: number) => {
    return Array.from({ length: last - first + 1 }, (_, index) => first + index)
  }

  if (totalPageNumbers >= totalElements) {
    paginationItems = siblingPage(1, totalElements).map((_el, index) => {
      return { onClickChangePage, page: index + 1 }
    })
  }
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = siblingPage(1, leftItemCount).map((_el, index) => {
      return { onClickChangePage, page: index + 1 }
    })

    paginationItems = [...leftRange, dots, lastPage]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = siblingPage(totalElements - rightItemCount + 1, totalElements).map(_el => {
      return { onClickChangePage, page: _el }
    })

    paginationItems = [firstPageIndex, dots, ...rightRange]
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = siblingPage(leftSiblingIndex, rightSiblingIndex).map(_el => {
      return { onClickChangePage, page: _el }
    })

    paginationItems = [firstPageIndex, dots, ...middleRange, dots, lastPage]
  }

  const onClickChangeCurrentPage = (type: 'next' | 'previous') => {
    if (type === 'next' && currentPage < totalElements) {
      onChangePage(currentPage + 1)
    }
    if (type === 'previous' && currentPage > 1) {
      onChangePage(currentPage - 1)
    }
  }

  return {
    onClickChangeCurrentPage,
    pageSizeSelect,
    paginationItems,
  } as UsePaginationResult
}
export type UsePaginationProps = {
  /**
   * The current items page.
   */
  currentPage: number
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
   *number of elements displayed on the page
   @param {}
   */
  itemsPerPage: number
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChangePage: (page: number) => void
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number
  /**
   * The total number of pages.
   * @default 1
   */
  totalPages: number
}
export type UsePaginationItem = {
  onClickChangePage: (page: number) => void
  page: number
  selected: boolean
  type: 'dods' | 'first' | 'last' | 'page'
}
export type UsePaginationResult = {
  onClickChangeCurrentPage: (type: 'next' | 'previous') => void
  pageSizeSelect: Option[]
  paginationItems: UsePaginationItem[]
}
