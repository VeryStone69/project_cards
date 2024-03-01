import { RootState } from '@/services/store'

export const pageSizeSelector = (state: RootState) => state.packs.pagination.pageSize
export const searchNameSelector = (state: RootState) => state.packs.filter.searchName
export const tabValueSelector = (state: RootState) => state.packs.filter.tabValue
export const sliderValueMinSelector = (state: RootState) => state.packs.filter.sliderValueMin
export const sliderValueMaxSelector = (state: RootState) => state.packs.filter.sliderValueMax
export const currentPageSelector = (state: RootState) => state.packs.pagination.currentPage
