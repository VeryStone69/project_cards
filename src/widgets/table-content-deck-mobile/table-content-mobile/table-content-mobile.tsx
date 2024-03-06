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

import s from './table-content-mobile.module.scss'

type Props = {
  currentUserId: string
  deck: DecksItems
}
export const TableContentMobile = ({ currentUserId, deck }: Props) => {
  const isMyDeck = currentUserId === deck.author.id
  const navigate = useNavigate()
  const onClickLearnCards = () => {
    navigate(`${deck.id}/learn`)
  }

  return (
    <Table.Row className={s.tableContent}>
      <div className={s.tableContentBlock}>
        <Table.Cell className={s.logo}>
          <Button as={Link} to={deck.id} variant={'link'}>
            <img alt={'Pack cover'} className={s.iconTable} src={deck.cover || defaultMask} />
          </Button>
        </Table.Cell>
        <Table.Cell align={'left'} className={s.tableItems}>
          <Button as={Link} to={deck.id} variant={'link'}>
            <Typography as={'h3'} variant={'body2'}>
              Name
            </Typography>
          </Button>

          <Button as={Link} className={s.name} to={deck.id} variant={'link'}>
            <Typography as={'h3'} variant={'body2'}>
              {deck.name}
            </Typography>
          </Button>
        </Table.Cell>
        <Table.Cell className={s.tableItems}>
          <Typography as={'h3'} variant={'body2'}>
            Cards
          </Typography>
          {deck.cardsCount}
        </Table.Cell>
        <Table.Cell className={s.tableItems}>
          <Typography as={'h3'} variant={'body2'}>
            Last Updated
          </Typography>
          {formatDate(deck.updated)}
        </Table.Cell>
        <Table.Cell className={s.tableItems}>
          <Typography as={'h3'} variant={'body2'}>
            Created by
          </Typography>
          {deck.author.name}
        </Table.Cell>
      </div>
      <div className={s.configButton}>
        {isMyDeck && (
          <>
            <div className={s.iconButton}>
              <EditPack
                cover={deck.cover}
                id={deck.id}
                isPrivate={deck.isPrivate}
                name={deck.name}
              />
            </div>
            <div className={s.iconButton}>
              <IconButton
                disabled={!deck.cardsCount}
                icon={<Icon name={'play'} size={'18px'} />}
                onClick={onClickLearnCards}
                small
              />
            </div>
            <div className={s.iconButton}>
              <DeleteDeckButton id={deck.id} name={deck.name} />
            </div>
          </>
        )}
        {!isMyDeck && (
          <div className={s.iconButton}>
            <IconButton
              disabled={!deck.cardsCount}
              icon={<Icon name={'play'} size={'18px'} />}
              onClick={onClickLearnCards}
              small
            />
          </div>
        )}
      </div>
    </Table.Row>
  )
}
