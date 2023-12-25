import { Option } from '@/components/ui/select'

export default function usePagination({
  currentItems,
  totalPages,
}: UsePaginationProps): UsePaginationResult {
  const onClick = (page: number) => {
    console.log(page)
  }
  const pageSizeSelect = [
    { title: '1', value: '1' },
    { title: '2', value: '2' },
    { title: '3', value: '3' },
    { title: '4', value: '4' },
    { title: '5', value: '5' },
  ]
  const totalElements = Math.ceil(totalPages / +currentItems)
  const itemsElement = Array.from({ length: totalElements })
  const paginationItems = itemsElement.map((_el, index) => {
    if (index === 0) {
      return { onClick, page: index + 1, selected: false, type: 'first' }
    }

    return { onClick, page: index + 1, selected: false, type: 'page' }
  })

  return {
    pageSizeSelect,
    paginationItems,
  } as UsePaginationResult
}
export type UsePaginationProps = {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number
  /**
   * The current items page.
   */
  currentItems: string
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
   *number of elements displayed on the page
   @param {}
   */
  itemsPerPage?: string
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
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
  onClick: (page: number) => void
  page: number
  selected: boolean
  type: 'end-ellipsis' | 'first' | 'last' | 'next' | 'page' | 'previous' | 'start-ellipsis'
}
export type UsePaginationResult = {
  pageSizeSelect: Option[]
  paginationItems: UsePaginationItem[]
}
