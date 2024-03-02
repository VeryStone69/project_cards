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

  const cardsColumns = [
    {
      key: 'name',
      sortable: true,
      title: 'Question',
    },
    {
      key: 'answer',
      sortable: true,
      title: 'Answer',
    },
    {
      key: 'updated',
      sortable: true,
      title: 'Last Updated',
    },
    {
      key: 'grade',
      sortable: true,
      title: 'Grade',
    },
  ]

  isMyPack
    ? cardsColumns.push({
        key: 'edit',
        sortable: true,
        title: '',
      })
    : false

  return {
    cardsColumns,
    isMyPack,
    defaultValue,
  }
}
