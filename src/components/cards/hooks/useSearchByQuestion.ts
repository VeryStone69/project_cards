import { useCallback, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useDebounce } from '@/app/hooks'
import { Sort } from '@/components/ui/table-header'
import { cardsActions } from '@/store/cards-slice/cards-slice'

export const useSearchByQuestion = () => {
  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()
  const searchName = searchParams.get('name') || ''

  const orderBy = searchParams.get('orderBy')
  const sortTable = orderBy && orderBy.split('-')

  const [sort, setSortTable] = useState<Sort>({
    direction: sortTable ? (sortTable[1] as 'asc' | 'desc') : 'asc',
    key: sortTable ? sortTable[0] : '',
  })

  const setSort = (sort: Sort) => {
    if (sort !== null) {
      searchParams.set('orderBy', `${sort.key}-${sort.direction}`)
    }
    if (sort === null) {
      searchParams.delete('orderBy')
    }

    setSearchParams(searchParams)
    setSortTable(sort)
  }

  const name = useDebounce(searchName)

  const setNameQuestion = useCallback(
    (value: string) => {
      searchParams.delete('currentPage')
      searchParams.set('name', value)
      if (value === '') {
        searchParams.delete('name')
      }
      setSearchParams(searchParams, { replace: true })
      dispatch(cardsActions.setSearchName({ newSearchQuestion: searchParams.get('name') }))
    },
    [searchParams]
  )

  return {
    name,
    orderBy,
    searchName,
    searchParams,
    setNameQuestion,
    setSearchParams,
    setSort,
    sort,
  }
}
