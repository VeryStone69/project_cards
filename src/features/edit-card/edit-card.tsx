import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { AddCardForm } from '@/components/forms/add-card-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateCardMutation } from '@/services/cards-api/cards-api'
import { UpdatesCardsType } from '@/utils/zod-resolvers/file-update-resolver'

type Props = {
  answer?: string
  cardId?: string
  question?: string
}

export const EditCard = ({ answer, cardId = '', question }: Props) => {
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState('1')
  const [updateCard] = useUpdateCardMutation()

  const onCancel = () => {
    setOpen(false)
  }

  const options = [
    {
      title: 'Text',
      value: '1',
    },
    {
      title: 'Picture',
      value: '2',
    },
  ]

  const handleSubmit: SubmitHandler<UpdatesCardsType> = async data => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)
    form.append('questionImg', data.questionImg || '')
    form.append('answerImg', data.answerImg || '')

    setOpen(!open)
    try {
      await toast.promise(updateCard({ cardId, data: form }), {
        pending: 'Cards is updating!',
        success: 'Cards was be updates',
      })
    } catch (error) {
      toast.error('Card is not updated')
    }
  }

  return (
    <>
      {option === '1' && (
        <Modal open={open} setOpen={setOpen} title={'Editing a card'}>
          <AddCardForm
            answer={answer}
            onCancel={onCancel}
            onSubmit={handleSubmit}
            onValueChange={setOption}
            options={options}
            question={question}
          />
        </Modal>
      )}

      {option === '2' && (
        <Modal open={open} setOpen={setOpen} title={'Editing a card'}>
          <AddCardForm
            answer={answer}
            onCancel={onCancel}
            onSubmit={handleSubmit}
            onValueChange={setOption}
            options={options}
            question={question}
            withImg
          />
        </Modal>
      )}

      <IconButton
        icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
      />
    </>
  )
}
