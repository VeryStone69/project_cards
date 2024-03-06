import { ComponentPropsWithoutRef, ElementType } from 'react'
import { SubmitHandler } from 'react-hook-form'

import notImg from '@/assets/images/not-img.jpg'
import {
  CardValueType,
  useAddCardForm,
} from '@/components/forms/create-and-modify-card-form/hook/useAddCardForm'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { ControlledFileUploader } from '@/components/ui/controlled/controlled-file-uploader/controlled-file-uploader'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Option, Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { UpdatesCardsType } from '@/utils/zod-resolvers/file-update-resolver'
import { clsx } from 'clsx'

import s from './create-and-modify-card-form.module.scss'

type Props<C extends ElementType = 'div'> = {
  defaultValue?: Partial<CardValueType>
  onCancel: () => void
  onSubmit: (data: FormData) => void
  onValueChange: (value: string) => void
  options: Option[]
} & Omit<ComponentPropsWithoutRef<C>, 'defaultValue' | 'onSubmit'>

export const CreateAndModifyCardForm = ({
  defaultValue,
  onCancel,
  onSubmit,
  onValueChange,
  options,
}: Props) => {
  const {
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
  } = useAddCardForm(defaultValue)

  const answerImgClasses = clsx(s.image, answerCover && s.hover, answerImgOpen && s.open)
  const questionImgClasses = clsx(s.image, questionCover && s.hover, questionImgOpen && s.open)
  const picture = !!defaultValue?.answerImg || !!defaultValue?.questionImg

  const onSubmitHandler: SubmitHandler<UpdatesCardsType> = async data => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)
    if (data.questionImg === null && questionCover === null) {
      form.append('questionImg', '')
    } else if (data.questionImg) {
      form.append('questionImg', data.questionImg || '')
    }
    if (data.answerImg === null && answerCover === null) {
      form.append('answerImg', '')
    } else if (data.answerImg) {
      form.append('answerImg', data.answerImg || '')
    }

    onSubmit(form)
  }

  const questionImgHandler = () => {
    if (questionCover) {
      setQuestionImgOpen(!questionImgOpen)
    }
  }

  const answerImgHandler = () => {
    if (answerCover) {
      setAnswerImgOpen(!answerImgOpen)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Select
        label={'Choose a question format'}
        onValueChange={onValueChange}
        options={options}
        placeholder={picture ? 'Picture' : 'Text'}
      />
      <div className={s.inputBlock}>
        <Typography variant={'subtitle2'}>
          {picture
            ? 'Upload pictures as questions and answers:'
            : 'Write a question and give the correct answer'}
        </Typography>
        <ControlledTextField control={control} label={'Question:'} name={'question'} />
        {picture && (
          <>
            <img
              alt={'notImg'}
              className={questionImgClasses}
              onClick={questionImgHandler}
              src={questionCover || notImg}
            />

            <div className={s.buttons}>
              <ControlledFileUploader
                className={s.fileUploader}
                control={control}
                errorToast={toastError}
                name={'questionImg'}
                type={'button'}
                variant={'secondary'}
              >
                <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
                <Typography variant={'subtitle2'}>Upload image</Typography>
              </ControlledFileUploader>

              {questionCover && (
                <Button
                  fullWidth
                  onClick={deleteQuestionCover}
                  type={'reset'}
                  variant={'secondary'}
                >
                  <Typography variant={'subtitle2'}>Delete image</Typography>
                  <Icon fill={'white'} name={'trashBin'} size={'18px'} />
                </Button>
              )}
            </div>
          </>
        )}

        <ControlledTextField control={control} label={'Answer:'} name={'answer'} />

        {picture && (
          <>
            <img
              alt={'notImg'}
              className={answerImgClasses}
              onClick={answerImgHandler}
              src={answerCover || notImg}
            />
            <div className={s.buttons}>
              <ControlledFileUploader
                className={s.fileUploader}
                control={control}
                errorToast={toastError}
                name={'answerImg'}
                type={'button'}
                variant={'secondary'}
              >
                <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
                <Typography variant={'subtitle2'}>Upload image</Typography>
              </ControlledFileUploader>

              {answerCover && (
                <Button fullWidth onClick={deleteAnswerCover} type={'reset'} variant={'secondary'}>
                  <Typography variant={'subtitle2'}>Delete image</Typography>
                  <Icon fill={'white'} name={'trashBin'} size={'18px'} />
                </Button>
              )}
            </div>
          </>
        )}
      </div>

      <ButtonFooter
        onClickCancel={onCancel}
        option={2}
        titleCancel={'Cancel'}
        titleConfirm={!defaultValue ? 'Create card' : 'Update card'}
      />
    </form>
  )
}
