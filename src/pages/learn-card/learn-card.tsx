import { useState } from 'react'

import { Layout } from '@/components/layout'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'

import s from './learn-card.module.scss'

type Props = {
  answer: string
  attempts: number
  deckName: string
  questions: number
}

export const LearnCard = ({ answer, attempts, deckName, questions }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false)
  const rate = [
    { title: 'Did you know', value: '1' },
    { title: 'Forgot', value: '2' },
    { title: 'A lot of through', value: '3' },
    { title: 'Confused', value: '4' },
    { title: 'Knew the answer', value: '5' },
  ]

  return (
    <Layout>
      <BackButton />
      {!showAnswer && (
        <Card className={s.card}>
          <Typography variant={'h1'}>{`Learn "${deckName}"`}</Typography>
          <div className={s.info}>
            <Typography variant={'subtitle1'}>{`Questions: ${questions}`}</Typography>
            <Typography variant={'subtitle2'}>{`Count of attempts: ${attempts}`}</Typography>
          </div>
          <Button
            fullWidth
            onClick={() => {
              setShowAnswer(!showAnswer)
            }}
            variant={'primary'}
          >
            Show answer
          </Button>
        </Card>
      )}
      {showAnswer && (
        <Card className={s.card}>
          <Typography variant={'h1'}>{`Learn "${deckName}"`}</Typography>
          <div className={s.info}>
            <Typography variant={'subtitle1'}>{`Questions: ${questions}`}</Typography>
            <Typography variant={'subtitle2'}>{`Count of attempts: ${attempts}`}</Typography>
          </div>
          <div className={s.answer}>
            <Typography variant={'subtitle1'}>{`Answer: ${answer}`}</Typography>
            <Typography variant={'subtitle1'}>{`Rate yourself:`}</Typography>
          </div>
          <div className={s.rate}>
            <RadioGroup options={rate} />
          </div>

          <Button
            fullWidth
            onClick={() => {
              setShowAnswer(!showAnswer)
            }}
            variant={'primary'}
          >
            Next question
          </Button>
        </Card>
      )}
    </Layout>
  )
}
