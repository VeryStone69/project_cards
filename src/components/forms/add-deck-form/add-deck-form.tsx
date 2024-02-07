import { useForm } from 'react-hook-form'

import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from '@/components/forms/add-card-form/card-form.module.scss'

type Props = {
  className?: string
  onSubmit: () => void
}
export const AddDeckForm = ({ className, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<{
    answer: string
    question: string
  }>({
    defaultValues: {
      answer: '',
      question: '',
    },
  })
  const classNames = clsx(s.form, className)

  return (
    <div className={s.formCard}>
      <DevTool control={control} />

      <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
        <div></div>
      </form>
    </div>
  )
}
