import { useForm } from 'react-hook-form'

import notImg from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Option, Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { UpdatesCardsType, updatesCardsSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from '@/components/forms/add-card-form/card-form.module.scss'

type AddCardFormProps = {
  answer?: string
  className?: string
  onCancel: () => void
  onSubmit: (values: { answer: string; question: string }) => void
  onValueChange: (value: string) => void
  options: Option[]
  question?: string
  withImg?: boolean
}

export const AddCardForm = ({
  answer,
  className,
  onCancel,
  onSubmit,
  onValueChange,
  options,
  question,
  withImg,
}: AddCardFormProps) => {
  const { control, handleSubmit } = useForm<UpdatesCardsType>({
    defaultValues: {
      answer: answer,
      question: question,
    },
    resolver: zodResolver(updatesCardsSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      {!withImg && (
        <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
          <Select
            label={'Choose a question format'}
            onValueChange={onValueChange}
            options={options}
            placeholder={'Text'}
          />

          <ControlledTextField
            className={s.email}
            control={control}
            label={'Question:'}
            name={'question'}
          />
          <ControlledTextField
            className={s.email}
            control={control}
            label={'Answer:'}
            name={'answer'}
          />
          <ButtonFooter
            onClickCancel={onCancel}
            option={2}
            titleCancel={'Cancel'}
            titleConfirm={'Save changes'}
          />
        </form>
      )}
      {withImg && (
        <>
          <Select
            label={'Choose a question format'}
            onValueChange={onValueChange}
            options={options}
            placeholder={'Picture'}
          />
          <TextField label={'Question:'} value={question} />
          <img alt={'notImg'} src={notImg} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button fullWidth variant={'secondary'}>
              Change cover
            </Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>

          <TextField label={'Answer:'} value={answer} />
          <img alt={'notImg'} src={notImg} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button fullWidth variant={'secondary'}>
              Change cover
            </Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>
          <ButtonFooter
            onClickCancel={onCancel}
            option={2}
            titleCancel={'Cancel'}
            titleConfirm={'Save changes'}
          />
        </>
      )}
    </div>
  )
}
