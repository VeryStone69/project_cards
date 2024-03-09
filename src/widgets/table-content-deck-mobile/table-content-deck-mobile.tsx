import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DecksItems } from '@/services/decks-api/decks-api.types'
import { TableContentMobile } from '@/widgets/table-content-deck-mobile/table-content-mobile/table-content-mobile'

import s from '@/pages/packs/packs-table/packs-table.module.scss'

type Props = {
  currentUserId: string
  items?: DecksItems[]
}
export const TableContentDeckMobile = ({ currentUserId, items }: Props) => {
  if (!items?.length) {
    return (
      <div className={s.noItems}>
        <Typography variant={'body1'}>No content with these terms...</Typography>
      </div>
    )
  }

  return (
    <Table.Root className={s.table}>
      <Table.Body>
        {items?.map(decks => (
          <TableContentMobile currentUserId={currentUserId} deck={decks} key={decks.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
