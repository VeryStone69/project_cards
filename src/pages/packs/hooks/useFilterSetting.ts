import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Sort } from '@/components/ui/table-header'
import {
  searchNameSelector,
  sliderValueMaxSelector,
  sliderValueMinSelector,
  tabValueSelector,
} from '@/pages/packs/selectors/packs-selectors'
import { packsActions } from '@/store/packs-slice/packs-slice'

export const useFilterSetting = (currentUserId: string | undefined) => {
  const dispatch = useAppDispatch()
  const searchName = useAppSelector(searchNameSelector)
  const sliderValueMin = useSelector(sliderValueMinSelector)
  const sliderValueMax = useSelector(sliderValueMaxSelector)
  const tabValue = useSelector(tabValueSelector)
  const [sort, setSort] = useState<Sort>(null)
  const clearFilter = useCallback(() => {
    dispatch(packsActions.resetFilters())
    setSort(null)
  }, [])
  const orderBy = sort ? `${sort.key}-${sort.direction}` : null
  const setName = useCallback((value: string) => {
    dispatch(packsActions.setSearchName({ newSearchName: value }))
  }, [])

  const setSlider = useCallback((value: number[]) => {
    dispatch(packsActions.setSliderValue({ newSliderValue: value }))
  }, [])
  const getMyCard = useCallback(
    (value: string) => {
      if (value === 'my') {
        if (currentUserId) {
          dispatch(
            packsActions.setTabValue({
              authorId: currentUserId,
              newTabValue: value,
            })
          )
        }
      }
      if (value === 'all') {
        dispatch(packsActions.setTabValue({ newTabValue: value }))
      }
    },
    [currentUserId, dispatch]
  )

  return {
    clearFilter,
    getMyCard,
    orderBy,
    searchName,
    setName,
    setSlider,
    setSort,
    sliderValueMax,
    sliderValueMin,
    sort,
    tabValue,
  }
}
