import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    authorId: undefined as string | undefined,
    searchName: '' as null | string,
    sliderValueMax: undefined as number | undefined,
    sliderValueMin: 0,
    tabValue: 'all' as null | string,
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
}

const slice = createSlice({
  initialState,
  name: 'packs',
  reducers: {
    resetFilters: state => {
      state.filter.searchName = ''
      state.filter.tabValue = 'all'
      state.filter.sliderValueMin = 0
      state.filter.sliderValueMax = undefined
      state.pagination.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
    setSearchName: (state, action: PayloadAction<{ newSearchName: null | string }>) => {
      state.filter.searchName = action.payload.newSearchName
    },
    setSliderValue: (state, action: PayloadAction<{ newSliderValue: number[] }>) => {
      state.filter.sliderValueMin = action.payload.newSliderValue[0]
      state.filter.sliderValueMax = action.payload.newSliderValue[1]
    },
    setTabValue: (
      state,
      action: PayloadAction<{ authorId?: string; newTabValue: null | string }>
    ) => {
      state.filter.tabValue = action.payload.newTabValue
      state.filter.authorId = action.payload.authorId
    },
  },
})

export const packsReducer = slice.reducer
export const packsActions = slice.actions
