import { DecksPagination } from '@/services/decks-api/decks-api.types'

export type CardsResponse = {
  items: CardsItem[]
  pagination: DecksPagination
}

export type CardsItem = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
export type CardRate = {
  cardId: string
  deckId: string
  grade: number
}
export type CardsParams = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
} | void

export type RandomCardRequest = {
  id: string
  previousCardId?: string
}
