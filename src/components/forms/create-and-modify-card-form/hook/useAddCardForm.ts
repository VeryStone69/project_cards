import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { updatesCardsSchema, UpdatesCardsType } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'

export type CardValueType = {
  answer: string
  answerImg: string
  question: string
  questionImg: string
}

export const useAddCardForm = (cardValue?: Partial<CardValueType>) => {
  const [questionImgOpen, setQuestionImgOpen] = useState(false)
  const [answerImgOpen, setAnswerImgOpen] = useState(false)
  const [questionCover, setQuestionCover] = useState<null | string>(cardValue?.questionImg || null)
  const [answerCover, setAnswerCover] = useState<null | string>(cardValue?.answerImg || null)

  const { control, getFieldState, getValues, handleSubmit, reset, setValue, trigger, watch } =
    useForm<UpdatesCardsType>({
      defaultValues: {
        answer: cardValue?.answer || '',
        answerImg: null,
        answerVideo: undefined,
        question: cardValue?.question || '',
        questionImg: null,
        questionVideo: undefined,
      },

      resolver: zodResolver(updatesCardsSchema),
    })

  const deleteQuestionCover = async () => {
    reset({ ...getValues(), questionImg: null })
    toast.warning('The question picture has been removed!')
    setQuestionImgOpen(false)
    setQuestionCover(null)
  }

  const deleteAnswerCover = async () => {
    reset({ ...getValues(), answerImg: null })
    toast.warning('The answer picture has been removed!')
    setQuestionImgOpen(false)
    setAnswerCover(null)
  }

  const toastError = async () => {
    const questionSuccess = await trigger('questionImg')
    const answerSuccess = await trigger('answerImg')
    const questionFile = watch('questionImg')
    const answerFile = watch('answerImg')

    const { error } = getFieldState('questionImg')

    if (questionFile && questionSuccess) {
      setValue('questionImg', questionFile)
      setQuestionCover(URL.createObjectURL(questionFile))
    }

    if (!questionSuccess && error?.message) {
      toast.error(error.message)
      reset({ ...getValues(), questionImg: null })
    }

    if (answerFile && answerSuccess) {
      setValue('answerImg', answerFile)
      setAnswerCover(URL.createObjectURL(answerFile))
    }

    if (!answerSuccess && error?.message) {
      toast.error(error.message)
      reset({ ...getValues(), answerImg: null })
    }
  }

  return {
    answerCover,
    answerImgOpen,
    control,
    deleteAnswerCover,
    deleteQuestionCover,
    handleSubmit,
    questionCover,
    questionImgOpen,
    setAnswerImgOpen,
    setQuestionImgOpen,
    toastError,
  }
}
