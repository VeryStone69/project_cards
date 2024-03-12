import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { rateOptions } from '@/common/consts/rate-options'
import { Button } from '@/components/ui/button'
import { ControlledRadioGroup } from '@/components/ui/controlled/controlled-radio-group'
import { Typography } from '@/components/ui/typography'

import s from './rate-card.module.scss'

type RateType = { grade: string }

type Props = {
  onSubmit: (data: RateType) => void
}

export const RateCardForm = ({ onSubmit }: Props) => {
  const { t } = useTranslation()
  const { control, handleSubmit } = useForm<RateType>({
    defaultValues: { grade: '1' },
  })

  return (
    <form className={s.rateForm} onSubmit={handleSubmit(onSubmit)}>
      <ControlledRadioGroup control={control} name={'grade'} options={rateOptions} />
      <Button className={s.button} fullWidth>
        <Typography variant={'subtitle2'}>{t('learn.next')}</Typography>
      </Button>
    </form>
  )
}
