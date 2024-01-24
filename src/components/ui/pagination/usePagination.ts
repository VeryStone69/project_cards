import { Option } from '@/components/ui/select'

enum Page {
  first = 1,
  next = 1,
  previous = 1,
}

export default function usePagination({
  currentPage,
  itemsPerPage,
  onChangePage,
  siblingCount,
  totalPages,
}: UsePaginationProps): UsePaginationResult {
  const pageSizeSelect = [
    { title: '5', value: '5' },
    { title: '7', value: '7' },
    { title: '10', value: '10' },
    { title: '15', value: '15' },
  ]
  const totalElements = Math.ceil(totalPages / +itemsPerPage)

  const hideNextButton = currentPage === totalElements
  const hidePrevButton = currentPage === Page.first

  const onClickChangePage = (page: number) => {
    onChangePage(page)
  }
  const lastPage = { onClickChangePage, page: totalElements }

  let paginationItems
  const dots = { type: 'dods' }

  const totalPageNumbers = siblingCount + 5

  /*
          Calculates left and right index and make sure they are within range 1 and totalElements
        */
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalElements)

  /*
          We do not show dots when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalElements.
           Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalElements - 2
        */
  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalElements - 2

  const firstPageIndex = { onClickChangePage, page: Page.first }

  /*
    Creates an array of a certain length and sets elements from it
      starting value to ending value.
    */
  const siblingPage = (first: number, last: number) => {
    return Array.from({ length: last - first + 1 }, (_, index) => first + index)
  }

  /*
          Case 1:
          If the number of pages is less than the page numbers we want to show in our
          pagination, we return and assign the range siblingPage [1...totalElements] which we then map and display on the page
        */
  if (totalPageNumbers >= totalElements) {
    paginationItems = siblingPage(1, totalElements).map((_el, index) => {
      return { onClickChangePage, page: index + 1 }
    })
  }
  /*
          Case 2: No left dots to show, but rights dots to be shown
        */
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = siblingPage(1, leftItemCount).map((_el, index) => {
      return { onClickChangePage, page: index + 1 }
    })

    paginationItems = [...leftRange, dots, lastPage]
  }
  /*
          Case 3: No right dots to show, but left dots to be shown
        */
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = siblingPage(totalElements - rightItemCount + 1, totalElements).map(_el => {
      return { onClickChangePage, page: _el }
    })

    paginationItems = [firstPageIndex, dots, ...rightRange]
  }
  /*
          Case 4: Both left and right dots to be shown
      */
  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = siblingPage(leftSiblingIndex, rightSiblingIndex).map(_el => {
      return { onClickChangePage, page: _el }
    })

    paginationItems = [firstPageIndex, dots, ...middleRange, dots, lastPage]
  }

  const onClickChangeCurrentPage = (type: CurrentPage) => {
    if (type === 'next' && currentPage < totalElements) {
      onChangePage(currentPage + Page.next)
    }
    if (type === 'previous' && currentPage > Page.first) {
      onChangePage(currentPage - Page.previous)
    }
  }

  return {
    hideNextButton,
    hidePrevButton,
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
   *number of elements displayed on the page
   */
  itemsPerPage: number
  /**
   * Callback fired when the page is changed.
   *
   * @param {number} page The page selected.
   */
  onChangePage: (page: number) => void
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: number
  /**
   * The total number of pages.
   * @default 1
   */
  totalPages: number
}
export type UsePaginationItem = {
  onClickChangePage: (page: number) => void
  page: number
  type: 'dods' | 'first' | 'last' | 'page'
}
type CurrentPage = 'next' | 'previous'
export type UsePaginationResult = {
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: boolean
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: boolean
  /**
   * Callback fired when the page is changed.
   */
  onClickChangeCurrentPage: (type: CurrentPage) => void
  /**
   * Size of displayed elements
   */
  pageSizeSelect: Option[]
  /**
   * Item page number
   */
  paginationItems: UsePaginationItem[]
}
