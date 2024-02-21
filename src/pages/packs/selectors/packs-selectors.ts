import { RootState } from '@/services/store'

export const pageSizeSelector = (state: RootState): number => state.packs.pagination.pageSize
export const searchNameSelector = (state: RootState): string => state.packs.filter.searchName
export const tabValueSelector = (state: RootState): string => state.packs.filter.tabValue
export const sliderValueMinSelector = (state: RootState): number =>
  state.packs.filter.sliderValueMin
export const sliderValueMaxSelector = (state: RootState) => state.packs.filter.sliderValueMax
export const currentPageSelector = (state: RootState): number => state.packs.pagination.currentPage
