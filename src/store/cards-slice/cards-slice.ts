import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    searchQuestion: '' as null | string,
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
}

const slice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
    setSearchName: (
      state,
      action: PayloadAction<{
        newSearchQuestion: null | string
      }>
    ) => {
      state.filter.searchQuestion = action.payload.newSearchQuestion
    },
  },
})

export const cardsReducer = slice.reducer
export const cardsActions = slice.actions
