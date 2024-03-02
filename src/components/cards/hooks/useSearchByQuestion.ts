import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch, useDebounce } from '@/app/hooks'
import { cardsActions } from '@/store/cards-slice/cards-slice'

export const useSearchByQuestion = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchName = searchParams.get('name') || ''

  const name = useDebounce(searchName)

  const setNameQuestion = useCallback(
    (value: string) => {
      searchParams.delete('currentPage')
      searchParams.set('name', value)
      if (value === '') {
        searchParams.delete('name')
      }
      setSearchParams(searchParams)
      dispatch(cardsActions.setSearchName({ newSearchQuestion: searchParams.get('name') }))
    },
    [searchParams]
  )

  return {
    searchName,
    searchParams,
    setNameQuestion,
    setSearchParams,
    name,
  }
}
