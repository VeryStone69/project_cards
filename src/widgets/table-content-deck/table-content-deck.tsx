import { Link } from 'react-router-dom'

import defaultMask from '@/assets/images/Mask.jpg'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DeleteCardButton } from '@/features/delete-card-button/delete-card-button'
import { DecksItems } from '@/services/decks-api/decks-api.types'

import s from './table-content.module.scss'

type Props = {
  deck: DecksItems
}
export const TableContentDeck = ({ deck }: Props) => {
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
      <Table.Cell>{new Date(deck.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell>{deck.author.name}</Table.Cell>
      <Table.Cell>
        <DeleteCardButton id={deck.id} name={deck.name} />
      </Table.Cell>
    </Table.Row>
  )
}
