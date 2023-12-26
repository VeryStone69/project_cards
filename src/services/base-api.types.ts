export type GetDecks = {
  items: GetDecksItems[]
  maxCardsCount: number
  pagination: GetDecksPagination
}

export type GetDecksItemsAuthor = {
  id: string
  name: string
}

export type GetDecksItems = {
  author: GetDecksItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  shots: number
  updated: string
  userId: string
}

export type GetDecksPagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId: string
  currentPage: number
  itemsPerPage: number
  maxCardsCount: number
  minCardsCount: number
  name: string
  orderBy: string
}
