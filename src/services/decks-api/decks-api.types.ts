export type DeleteDecks = {
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type GetDecks = {
  items: DecksItems[]
  maxCardsCount: number
  pagination: DecksPagination
}

export type GetDecksItemsAuthor = {
  id: string
  name: string
}

export type DecksItems = {
  author: GetDecksItemsAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  shots?: number
  updated: string
  userId: string
}

export type DecksPagination = {
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
  orderBy: null | string
}
