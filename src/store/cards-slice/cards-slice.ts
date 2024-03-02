import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    searchQuestion: '' as null | string,
  },
}

const slice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
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
