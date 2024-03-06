import { ContentTable } from '@/components/cards/content-table/content-table'
import { Table } from '@/components/ui/table'
import { Sort, TableHeader } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { CardsResponse } from '@/services/cards-api/cards-api-types'

import s from '../cards.module.scss'

type Props = {
  cardsColumns: CardColumn[]
  cardsData?: CardsResponse
  deckName?: string
  isMyPack: boolean
  setSort: (sort: Sort) => void
  sort: Sort
}

type CardColumn = {
  key: string
  sortable: boolean
  title: string
}

export const CardsTable = ({
  cardsColumns,
  cardsData,
  deckName,
  isMyPack,
  setSort,
  sort,
}: Props) => {
  if (!cardsData?.items.length) {
    return (
      <div className={s.noItems}>
        <Typography variant={'body1'}>No content with these terms...</Typography>
      </div>
    )
  }

  const columns = cardsColumns.filter(c => (isMyPack ? c : c.key !== 'controls'))

  return (
    <Table.Root className={s.table}>
      <TableHeader columns={columns} onSort={setSort} sort={sort} />
      <Table.Body>
        {cardsData?.items.map(items => (
          <ContentTable deckName={deckName} isMyPack={isMyPack} items={items} key={items.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
