import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { currentPageSelector, pageSizeSelector } from '@/pages/packs/selectors/packs-selectors'
import { packsActions } from '@/store/packs-slice/packs-slice'

export const usePaginationDecks = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(currentPageSelector)
  const itemsPerPage = useAppSelector(pageSizeSelector)
  const changePage = useCallback((page: number) => {
    dispatch(packsActions.setCurrentPage({ newPage: page }))
  }, [])
  const changeItemPerPage = useCallback((item: number) => {
    dispatch(packsActions.setPageSize({ newPageSize: item }))
  }, [])

  return {
    changeItemPerPage,
    changePage,
    currentPage,
    itemsPerPage,
  }
}
