import { RateCardForm } from '@/components/forms/rate-card'
import { Typography } from '@/components/ui/typography'

import s from '@/pages/learn-card/learn-card.module.scss'

type Props = {
  answer?: string
  isShowAnswerImg?: string
  nextQuestionHandler: (data: { grade: string }) => void
}

export const ShowAnswer = ({ answer, isShowAnswerImg, nextQuestionHandler }: Props) => {
  return (
    <>
      <div className={s.answer}>
        {isShowAnswerImg && <img alt={'answerImg'} className={s.answerImg} src={isShowAnswerImg} />}
        <Typography variant={'subtitle1'}>{`Answer: ${answer}`}</Typography>

        <Typography variant={'subtitle1'}>{`Rate yourself:`}</Typography>
      </div>
      <RateCardForm onSubmit={nextQuestionHandler} />
    </>
  )
}
