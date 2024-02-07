import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { useGetLearnCardQuery, useUpdateRateCardMutation } from '@/services/cards-api/cards-api'
import { useGetDeckInfoQuery } from '@/services/decks-api/decks-api'

import s from './learn-card.module.scss'

export const LearnCard = () => {
  const { id } = useParams()

  const { data: cardData } = useGetLearnCardQuery({ id: id ? id : '' })

  const { data: deckData } = useGetDeckInfoQuery({ id: id ? id : '' })

  const [nextQuestion] = useUpdateRateCardMutation()

  const nextQuestionHandler = () => {
    nextQuestion({ cardId: cardData ? cardData.id : '', grade: 1 })
  }

  const [showAnswer, setShowAnswer] = useState(false)
  const rate = [
    { title: 'Did you know', value: '1' },
    { title: 'Forgot', value: '2' },
    { title: 'A lot of through', value: '3' },
    { title: 'Confused', value: '4' },
    { title: 'Knew the answer', value: '5' },
  ]

  return (
    <>
      <BackButton className={s.backButton} />
      {!showAnswer && (
        <Card className={s.card}>
          <Typography variant={'h1'}>{`Learn "${deckData?.name}"`}</Typography>
          <div className={s.info}>
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
            <Typography variant={'subtitle1'}>{`Questions:  ${cardData?.question}`}</Typography>
            <Typography variant={'subtitle2'}>{`Count of attempts: ${cardData?.shots}`}</Typography>
          </div>
          <div className={s.answer}>
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
