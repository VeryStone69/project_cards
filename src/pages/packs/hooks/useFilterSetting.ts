import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { useAppDispatch } from '@/app/hooks'
import { Sort } from '@/components/ui/table-header'
import { sliderValueMaxSelector } from '@/pages/packs/selectors/packs-selectors'
import { packsActions } from '@/store/packs-slice/packs-slice'

export const useFilterSetting = (currentUserId: string | undefined) => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const sliderRangeMax = useSelector(sliderValueMaxSelector)
  const sliderValueMin = Number(searchParams.get('minCardsCount')) || 0
  const sliderValueMax = Number(searchParams.get('maxCardsCount')) || sliderRangeMax

  const searchName = searchParams.get('name') || ''

  const tabValue = searchParams.get('currentTab') || 'all'
  const [sort, setSort] = useState<Sort>(null)

  const clearFilter = useCallback(() => {
    dispatch(packsActions.resetFilters())
    setSort(null)
    for (const key of searchParams.keys()) {
      searchParams.delete(key)
    }
    setSearchParams('')
  }, [])

  const orderBy = sort ? `${sort.key}-${sort.direction}` : null

  const setName = useCallback((value: string) => {
    searchParams.delete('currentPage')
    searchParams.set('name', value)
    if (value === '') {
      searchParams.delete('name')
    }
    setSearchParams(searchParams)
    dispatch(packsActions.setSearchName({ newSearchName: searchParams.get('name') }))
  }, [])

  const setSlider = useCallback(
    (value: number[]) => {
      searchParams.delete('currentPage')
      searchParams.set('minCardsCount', value[0].toString())
      searchParams.set('maxCardsCount', value[1].toString())
      setSearchParams(searchParams)
      dispatch(
        packsActions.setSliderValue({
          newSliderValue: [sliderValueMin, Number(searchParams.get('maxCardsCount'))],
        })
      )
    },
    [searchParams]
  )
  const getMyCard = useCallback(
    (value: string) => {
      searchParams.delete('currentPage')
      searchParams.set('currentTab', value)

      setSearchParams(searchParams)

      dispatch(
        packsActions.setTabValue({
          authorId: currentUserId,
          newTabValue: searchParams.get('currentTab'),
        })
      )
    },
    [searchParams]
  )

  return {
    clearFilter,
    getMyCard,
    orderBy,
    searchName,
    searchParams,
    setName,
    setSearchParams,
    setSlider,
    setSort,
    sliderValueMax,
    sliderValueMin,
    sort,
    tabValue,
  }
}
