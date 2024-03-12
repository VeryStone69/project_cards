import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/ui/typography'

import s from './show-question.module.scss'

type Props = {
  isShowQuestionImg?: string
  question?: string
  shots?: number
}

export const ShowQuestion = ({ isShowQuestionImg, question, shots }: Props) => {
  const { t } = useTranslation()

  return (
    <div className={s.info}>
      {isShowQuestionImg && (
        <img alt={isShowQuestionImg} className={s.questionImg} src={isShowQuestionImg} />
      )}

      <Typography variant={'subtitle1'}>{t('learn.question', { name: question })}</Typography>
      <Typography variant={'subtitle2'}>{t('learn.attempts', { attempts: shots })}</Typography>
    </div>
  )
}
