import { Link } from 'react-router-dom'

import defaultMask from '@/assets/images/not-img.jpg'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DeleteDeckButton } from '@/features/delete-deck-button'
import { EditPack } from '@/features/edit-pack'
import { DecksItems } from '@/services/decks-api/decks-api.types'
import { formatDate } from '@/utils/format-date'

import s from './table-content.module.scss'

type Props = {
  currentUserId: string
  deck: DecksItems
}
export const TableContentDeck = ({ currentUserId, deck }: Props) => {
  return (
    <Table.Row key={deck.id}>
      <Table.Cell align={'left'}>
        <Button as={Link} className={s.link} to={deck.id} variant={'link'}>
          <img alt={'Pack cover'} className={s.iconTable} src={deck.cover ?? defaultMask} />
          <Typography as={'h3'} className={s.title} variant={'body2'}>
            {deck.name}
          </Typography>
        </Button>
      </Table.Cell>
      <Table.Cell>{deck.cardsCount}</Table.Cell>
      <Table.Cell>{formatDate(deck.updated)}</Table.Cell>
      <Table.Cell>{deck.author.name}</Table.Cell>
      <Table.Cell>
        {currentUserId == deck.author.id && (
          <div className={s.configButton}>
            <EditPack />
            <DeleteDeckButton id={deck.id} name={deck.name} />
          </div>
        )}
      </Table.Cell>
    </Table.Row>
  )
}
