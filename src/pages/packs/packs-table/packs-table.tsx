import { useTranslation } from 'react-i18next'

import { packsColumns } from '@/common/consts/packs-columns'
import { Table } from '@/components/ui/table'
import { Sort, TableHeader } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { DecksItems } from '@/services/decks-api/decks-api.types'
import { TableContentDeck } from '@/widgets/table-content-deck'

import s from './packs-table.module.scss'

type PacksTableProps = {
  currentUserId: string
  items?: DecksItems[]
  setSort: (sort: Sort) => void
  sort: Sort
}
export const PacksTable = ({ currentUserId, items, setSort, sort }: PacksTableProps) => {
  const { t } = useTranslation()

  if (!items?.length) {
    return (
      <div className={s.noItems}>
        <Typography variant={'body1'}>{t('terms')}</Typography>
      </div>
    )
  }

  return (
    <Table.Root className={s.table}>
      <TableHeader columns={packsColumns} onSort={setSort} sort={sort} />
      <Table.Body>
        {items?.map(decks => (
          <TableContentDeck currentUserId={currentUserId} deck={decks} key={decks.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
