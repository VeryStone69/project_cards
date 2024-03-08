import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { DeleteCardButton } from '@/features/delete-card-button'
import { EditCard } from '@/features/edit-card'
import { CardsItem } from '@/services/cards-api/cards-api-types'
import { formatDate } from '@/utils/format-date'

import s from './content-table.module.scss'

import noImage from '../../../assets/images/not-img.jpg'

type Props = {
  deckName?: string
  isMyPack: boolean
  items: CardsItem
}

export const ContentTable = ({ deckName = '', isMyPack, items }: Props) => {
  const showAnswer = items.grade !== 5 ? 'unavailable' : items.answer

  return (
    <Table.Row className={s.row} key={items.id}>
      <Table.Cell>
        <div className={s.container}>
          <img alt={'Pack cover'} className={s.cover} src={items.questionImg || noImage} />
          <Typography as={'h3'} className={s.title} variant={'body2'}>
            {items.question}
          </Typography>
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className={s.container}>
          <img alt={'Pack cover'} className={s.cover} src={items.answerImg || noImage} />
          <Typography as={'h3'} className={s.title} variant={'body2'}>
            {showAnswer}
          </Typography>
        </div>
      </Table.Cell>
      <Table.Cell>{formatDate(items.updated)}</Table.Cell>
      <Table.Cell className={s.cell}>
        <Rating className={s.grade} rating={items.grade} />
      </Table.Cell>

      {isMyPack && (
        <Table.Cell className={s.cell}>
          <div className={s.editButtons}>
            <EditCard
              answer={items.answer}
              answerImg={items.answerImg}
              cardId={items.id}
              question={items.question}
              questionImg={items.questionImg}
            />
            <DeleteCardButton id={items.id} name={deckName} />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  )
}
