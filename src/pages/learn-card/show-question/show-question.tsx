import { Typography } from '@/components/ui/typography'

import s from './show-question.module.scss'

type Props = {
  isShowQuestionImg?: string
  question?: string
  shots?: number
}

export const ShowQuestion = ({ isShowQuestionImg, question, shots }: Props) => {
  return (
    <div className={s.info}>
      {isShowQuestionImg && (
        <img alt={isShowQuestionImg} className={s.questionImg} src={isShowQuestionImg} />
      )}

      <Typography variant={'subtitle1'}>{`Questions: ${question}`}</Typography>
      <Typography variant={'subtitle2'}>{`Count of attempts: ${shots}`}</Typography>
    </div>
  )
}
