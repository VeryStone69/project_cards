import { cardsColumns } from '@/common/consts/cards-columns'
import { useMeQuery } from '@/services/auth-api/auth'
import { DecksItems } from '@/services/decks-api/decks-api.types'

export const useTableCardsInfo = (data?: DecksItems) => {
  const { data: meData } = useMeQuery()

  const isMyPack = meData?.id === data?.userId

  const defaultValue = {
    cover: data?.cover || null,
    isPrivate: data?.isPrivate || false,
    name: data?.name || '',
  }

  return {
    cardsColumns,
    defaultValue,
    isMyPack,
  }
}
