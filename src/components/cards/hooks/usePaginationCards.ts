import { useCallback } from 'react'

import { useAppDispatch } from '@/app/hooks'
import { cardsActions } from '@/store/cards-slice/cards-slice'
import { packsActions } from '@/store/packs-slice/packs-slice'

export const usePaginationCards = (
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
) => {
  const dispatch = useAppDispatch()

  const currentPage = Number(searchParams.get('currentPage')) || 1
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 5
  const changePage = useCallback(
    (page: number) => {
      searchParams.set('currentPage', String(page))
      setSearchParams(searchParams)
      dispatch(cardsActions.setCurrentPage({ newPage: Number(searchParams.get('currentPage')) }))
    },
    [searchParams]
  )
  const changeItemPerPage = useCallback(
    (item: number) => {
      searchParams.set('itemsPerPage', String(item))
      searchParams.set('currentPage', '1')
      setSearchParams(searchParams)
      dispatch(packsActions.setCurrentPage({ newPage: 1 }))
      dispatch(cardsActions.setPageSize({ newPageSize: Number(searchParams.get('itemsPerPage')) }))
    },
    [searchParams]
  )

  return {
    changeItemPerPage,
    changePage,
    currentPage,
    itemsPerPage,
  }
}
