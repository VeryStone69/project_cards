import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

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
      <Button
        as={Link}
        className={s.backButton}
        onClick={() => navigate(-1)}
        relative={'path'}
        to={'..'}
        variant={'secondary'}
      >
        <Typography className={s.text} variant={'body2'}>
          End learning
        </Typography>
      </Button>

      <Card className={s.card}>
        <Typography variant={'h1'}>{`Learn "${deckData?.name}"`}</Typography>
        <ShowQuestion
          isShowQuestionImg={isShowQuestionImg}
          question={cardData?.question}
          shots={cardData?.shots}
        />
        {showAnswer ? (
          <ShowAnswer
            answer={cardData?.answer}
            isShowAnswerImg={isShowAnswerImg}
            nextQuestionHandler={nextQuestionHandler}
          />
        ) : (
          <Button fullWidth onClick={() => setShowAnswer(true)}>
            <Typography variant={'subtitle2'}>Show answer</Typography>
          </Button>
        )}
      </Card>
    </>
  )
}
