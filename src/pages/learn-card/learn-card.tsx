import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { useGetLearnCardQuery, useUpdateRateCardMutation } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'

import s from './learn-card.module.scss'

export const LearnCard = () => {
  const { id } = useParams()
  const deckId = id as string
  const navigate = useNavigate()

  const { data: deckData } = useGetDeckInfoQuery({ id: deckId })
  const { data: cardData } = useGetLearnCardQuery({ id: deckId })

  const [nextQuestion] = useUpdateRateCardMutation()

  const nextQuestionHandler = () => {
    nextQuestion({ cardId: cardData ? cardData?.id : '', grade: 1 })
    setShowAnswer(!showAnswer)
  }

  const [showAnswer, setShowAnswer] = useState(false)
  const rate = [
    { title: 'Did you know', value: '1' },
    { title: 'Forgot', value: '2' },
    { title: 'A lot of through', value: '3' },
    { title: 'Confused', value: '4' },
    { title: 'Knew the answer', value: '5' },
  ]

  const questionImg = cardData?.questionImg
  const answerImg = cardData?.answerImg

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
      {!showAnswer && (
        <Card className={s.card}>
          <Typography variant={'h1'}>{`Learn "${deckData?.name}"`}</Typography>
          <div className={s.info}>
            {questionImg && <img alt={questionImg} className={s.questionImg} src={questionImg} />}
            <Typography variant={'subtitle1'}>{`Questions: ${cardData?.question}`}</Typography>

            <Typography variant={'subtitle2'}>{`Count of attempts: ${cardData?.shots}`}</Typography>
          </div>
          <Button
            fullWidth
            onClick={() => {
              setShowAnswer(!showAnswer)
            }}
            variant={'primary'}
          >
            <Typography variant={'subtitle2'}>Show answer</Typography>
          </Button>
        </Card>
      )}
      {showAnswer && (
        <Card className={s.card}>
          <Typography variant={'h1'}>{`Learn "${deckData?.name}"`}</Typography>
          <div className={s.info}>
            {questionImg && <img alt={questionImg} className={s.questionImg} src={questionImg} />}
            <Typography variant={'subtitle1'}>{`Questions: ${cardData?.question}`}</Typography>
            <Typography variant={'subtitle2'}>{`Count of attempts: ${cardData?.shots}`}</Typography>
          </div>
          <div className={s.answer}>
            {answerImg && <img alt={'answerImg'} className={s.answerImg} src={answerImg} />}
            <Typography variant={'subtitle1'}>{`Answer: ${cardData?.answer}`}</Typography>

            <Typography variant={'subtitle1'}>{`Rate yourself:`}</Typography>
          </div>
          <div className={s.rate}>
            <RadioGroup options={rate} />
          </div>
          <Button fullWidth onClick={nextQuestionHandler} variant={'primary'}>
            <Typography variant={'subtitle2'}>Next question</Typography>
          </Button>
        </Card>
      )}
    </>
  )
}
