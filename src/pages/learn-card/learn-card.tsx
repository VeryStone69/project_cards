import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ShowAnswer } from '@/pages/learn-card/show-answer/show-answer'
import { ShowQuestion } from '@/pages/learn-card/show-question/show-question'
import { useGetLearnCardQuery, useRateCardMutation } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'
import { errorNotification } from '@/utils/error-notification/error-notification'

import s from './learn-card.module.scss'

export const LearnCard = () => {
  const { id } = useParams()
  const deckId = id as string
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { data: deckData } = useGetDeckInfoQuery({ id: deckId })
  const { data: cardData } = useGetLearnCardQuery({ id: deckId })

  const [rateCard] = useRateCardMutation()

  const nextQuestionHandler = async (data: { grade: string }) => {
    try {
      await rateCard({
        cardId: cardData!.id,
        deckId,
        grade: +data.grade,
      }).unwrap()
    } catch (error) {
      errorNotification(error)
    }
    setShowAnswer(false)
  }

  const [showAnswer, setShowAnswer] = useState(false)

  const isShowQuestionImg = cardData?.questionImg
  const isShowAnswerImg = cardData?.answerImg

  return (
    <>
      <Card className={s.card}>
        <Typography variant={'h1'}>{t('learn.title', { name: deckData?.name })}</Typography>
        <ShowQuestion
          isShowQuestionImg={isShowQuestionImg}
          question={cardData?.question}
          shots={cardData?.shots}
        />
        {showAnswer && (
          <ShowAnswer
            answer={cardData?.answer}
            isShowAnswerImg={isShowAnswerImg}
            nextQuestionHandler={nextQuestionHandler}
          />
        )}
        {!showAnswer && (
          <Button fullWidth onClick={() => setShowAnswer(true)}>
            <Typography variant={'subtitle2'}>{t('learn.show')}</Typography>
          </Button>
        )}
        <Button onClick={() => navigate(-1)} variant={'secondary'}>
          <Typography variant={'subtitle2'}>{t('learn.end')}</Typography>
        </Button>
      </Card>
    </>
  )
}
