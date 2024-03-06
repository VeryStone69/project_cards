import { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import defaultMask from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
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
export const TableContentDeck = memo(({ currentUserId, deck }: Props) => {
  const isMyDeck = currentUserId === deck.author.id
  const navigate = useNavigate()
  const onClickLearnCards = () => {
    navigate(`${deck.id}/learn`)
  }

  return (
    <Table.Row key={deck.id}>
      <Table.Cell align={'left'}>
        <Button as={Link} className={s.link} to={deck.id} variant={'link'}>
          <img alt={'Pack cover'} className={s.iconTable} src={deck.cover || defaultMask} />
          <Typography as={'h3'} className={s.title} variant={'body2'}>
            {deck.name}
          </Typography>
        </Button>
      </Table.Cell>
      <Table.Cell>{deck.cardsCount}</Table.Cell>
      <Table.Cell>{formatDate(deck.updated)}</Table.Cell>
      <Table.Cell>{deck.author.name}</Table.Cell>
      <Table.Cell>
        <div className={s.configButton}>
          {isMyDeck && (
            <>
              <EditPack
                cover={deck.cover}
                id={deck.id}
                isPrivate={deck.isPrivate}
                name={deck.name}
              />
              <IconButton
                disabled={!deck.cardsCount}
                icon={<Icon name={'play'} size={'18px'} />}
                onClick={onClickLearnCards}
                small
              />
              <DeleteDeckButton id={deck.id} name={deck.name} />
            </>
          )}
          {!isMyDeck && (
            <IconButton
              disabled={!deck.cardsCount}
              icon={<Icon name={'play'} size={'18px'} />}
              onClick={onClickLearnCards}
              small
            />
          )}
        </div>
      </Table.Cell>
    </Table.Row>
  )
})
