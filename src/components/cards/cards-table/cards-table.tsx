import { TableHeader } from '@/components/ui/table-header'
import { Table } from '@/components/ui/table'
import defaultMask from '@/assets/images/not-img.jpg'
import { Rating } from '@/components/ui/rating'
import { EditCard } from '@/features/edit-card'
import { DeleteCardButton } from '@/features/delete-card-button'
import { CardResponse } from '@/services/cards-api/cards-api-types'
import { DecksItems } from '@/services/decks-api/decks-api.types'
import { Typography } from '@/components/ui/typography'

import s from '../cards.module.scss'

type Props = {
  cardsColumns: CardColumn[]
  cardsData?: CardResponse
  isMyPack: boolean
  deckData?: DecksItems
}

type CardColumn = {
  key: string
  sortable: boolean
  title: string
}

export const CardsTable = ({ cardsColumns, cardsData, deckData, isMyPack }: Props) => {
  if (!cardsData?.items.length) {
    return (
      <div className={s.noItems}>
        <Typography variant={'body1'}>No content with these terms...</Typography>
      </div>
    )
  }

  return (
    <Table.Root className={s.table}>
      <TableHeader columns={cardsColumns} />
      <Table.Body>
        {cardsData?.items.map(items => {
          return (
            <Table.Row key={items.id}>
              <Table.Cell className={s.questionCell}>
                <img
                  alt={'Pack cover'}
                  className={s.questionImg}
                  src={items.questionImg ?? defaultMask}
                />
                <p>{items.question}</p>
              </Table.Cell>
              <Table.Cell className={s.answerCell}>
                <img
                  alt={'Pack cover'}
                  className={s.answerImg}
                  src={items.answerImg ?? defaultMask}
                />
                <p>{items.answer}</p>
              </Table.Cell>
              <Table.Cell className={s.dateCell}>
                {new Date(items.updated).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell className={s.rateCell}>
                <Rating rating={items.grade} />
              </Table.Cell>

              {isMyPack && (
                <Table.Cell>
                  <div className={s.editButtons}>
                    <EditCard
                      answer={items.answer}
                      answerImg={items.answerImg}
                      cardId={items.id}
                      question={items.question}
                      questionImg={items.questionImg}
                    />
                    <DeleteCardButton id={items.id} name={deckData?.name || ''} />
                  </div>
                </Table.Cell>
              )}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
