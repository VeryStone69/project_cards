import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
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

  const setName = useCallback((value: string) => {
    dispatch(packsActions.setSearchName({ newSearchName: value }))
  }, [])

  const setSlider = useCallback((value: number[]) => {
    dispatch(packsActions.setSliderValue({ newSliderValue: value }))
  }, [])
  const getMyCard = useCallback((value: string) => {
    if (value === 'my') {
      if (currentUserId) {
        dispatch(packsActions.setTabValue({ authorId: currentUserId, newTabValue: value }))
      }
    }
    if (value === 'all') {
      dispatch(packsActions.setTabValue({ newTabValue: value }))
    }
  }, [])

  return {
    getMyCard,
    searchName,
    setName,
    setSlider,
    sliderValueMax,
    sliderValueMin,
    tabValue,
  }
}
