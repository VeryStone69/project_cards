import { RateCardForm } from '@/components/forms/rate-card'
import { Typography } from '@/components/ui/typography'

import s from './show-answer.module.scss'

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
      </div>
      <Typography className={s.rate} variant={'subtitle1'}>{`Rate yourself:`}</Typography>
      <RateCardForm onSubmit={nextQuestionHandler} />
    </>
  )
}
