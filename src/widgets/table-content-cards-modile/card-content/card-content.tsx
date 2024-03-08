import noImage from '@/assets/images/not-img.jpg'
import { Rating } from '@/components/ui/rating'
import { Typography } from '@/components/ui/typography'
import { DeleteCardButton } from '@/features/delete-card-button'
import { EditCard } from '@/features/edit-card'
import { CardsItem } from '@/services/cards-api/cards-api-types'
import { formatDate } from '@/utils/format-date'
import { clsx } from 'clsx'

import s from './card-content.module.scss'
type Props = {
  deckName?: string
  isMyPack: boolean
  items: CardsItem
}
export const CardContent = ({ deckName = '', isMyPack, items }: Props) => {
  const showAnswer = items.grade !== 5 ? 'unavailable' : items.answer
  const content = clsx(s.content, !isMyPack && s.block)

  return (
    <>
      <div className={content}>
        <div className={s.description}>
          <div className={s.imgBlock}>
            <img alt={'question'} className={s.iconTable} src={items.questionImg || noImage} />
            <Typography as={'h3'} variant={'body2'}>
              question
            </Typography>
          </div>
          <Typography as={'h3'} variant={'body2'}>
            {items.question}
          </Typography>
        </div>
        <div className={s.description}>
          <div className={s.imgBlock}>
            <Typography as={'h3'} variant={'body2'}>
              answer
            </Typography>
            <img alt={'question'} className={s.iconTable} src={items.answerImg || noImage} />
          </div>
          <Typography as={'h3'} variant={'body2'}>
            {showAnswer}
          </Typography>
        </div>
        <div className={s.title}>
          <Typography as={'h3'} variant={'body2'}>
            updated
          </Typography>
          <Typography as={'h3'} variant={'body2'}>
            {formatDate(items.updated)}
          </Typography>
        </div>
        <div className={s.title}>
          <Typography as={'h3'} variant={'body2'}>
            Grade
          </Typography>
          <Rating rating={items.grade} />
        </div>
      </div>
      {isMyPack && (
        <div className={s.myPack}>
          <div className={s.editCard}>
            <EditCard
              answer={items.answer}
              answerImg={items.answerImg}
              cardId={items.id}
              question={items.question}
              questionImg={items.questionImg}
            />
          </div>
          <div className={s.deleteCard}>
            <DeleteCardButton id={items.id} name={deckName} />
          </div>
        </div>
      )}
    </>
  )
}
