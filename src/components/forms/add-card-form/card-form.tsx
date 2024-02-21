import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Option, Select } from '@/components/ui/select'
import { ButtonFooter } from '@/features/button-footer'
import { clsx } from 'clsx'

import s from '@/components/forms/add-card-form/card-form.module.scss'

type AddCardFormProps = {
  className?: string
  onSubmit: (values: { answer: string; question: string }) => void
  onValueChange: (value: string) => void
  options: Option[]
}
type CardData = {
  answer: string
  question: string
}
export const AddCardForm = ({ className, onSubmit, onValueChange, options }: AddCardFormProps) => {
  const { control, handleSubmit } = useForm<CardData>({
    defaultValues: {
      answer: '',
      question: '',
    },
  })

  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <Select
          label={'Choose a question format'}
          onValueChange={onValueChange}
          options={options}
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
        <ButtonFooter option={2} titleCancel={'Cancel'} titleConfirm={'Save changes'} />
      </form>
    </div>
  )
}
