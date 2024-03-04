import { BackButton } from '@/components/ui/back-button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './rules.module.scss'

export const Rules = () => {
  return (
    <>
      <BackButton className={s.backButton} />
      <div className={s.wrapper}>
        <Card className={s.rulesPage}>
          <Typography className={s.title} variant={'h1'}>
            Quiz Decks game rules:
          </Typography>

          <Typography variant={'subtitle2'}>
            <ol>
              <li>
                Creating a Deck of Cards: The player creates a deck by choosing a topic or subject
                they want to study. For example, English, chemistry, history, etc.
              </li>
              <li>
                Creating Cards in a Deck: The player creates a card with a question and answer.
                There can also be pictures as questions and answers. For example, the question: what
                is the word car in English, the answer is Car.
              </li>
              <li>
                Memorizing Information: Players can look at cards and try to remember the
                information on them. They can then review the answer and test their knowledge by
                comparing their answers with the correct ones.
              </li>
              <li>
                Progress Score: The web version of the Quiz Cards game can provide a system to
                measure the player&apos;s progress, showing correct and incorrect answers, as well
                as overall progress in learning the selected topic.
              </li>
              <li>
                Review and Retest: Players can review cards over and over again to consolidate their
                knowledge and improve their scores. This helps players learn new topics and concepts
                more deeply and retain the information for a long time.
              </li>
            </ol>
          </Typography>
        </Card>
      </div>
    </>
  )
}
