import { useState } from 'react'
import { toast } from 'react-toastify'

import { CreateAndModifyCardForm } from '@/components/forms/create-and-modify-card-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateCardMutation } from '@/services/cards-api/cards-api'

type Props = {
  answer?: string
  answerImg?: string
  cardId?: string
  question?: string
  questionImg?: string
}

export const EditCard = ({ answer, answerImg, cardId = '', question, questionImg }: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const [option, setOption] = useState('1')
  const [updateCard] = useUpdateCardMutation()
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

  const defaultValues = {
    answer,
    answerImg,
    question,
    questionImg,
  }

  const updateCardOnSubmit = async (data: FormData) => {
    try {
      await toast.promise(updateCard({ cardId, data }), {
        pending: 'Updating a card!',
        success: 'The card has been updated!',
      })
    } catch (error) {
      toast.error('Error updating card :(')
    }
    setOpenModal(false)
  }

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} title={'Editing a card'}>
        <CreateAndModifyCardForm
          defaultValue={defaultValues}
          onCancel={() => setOpenModal(false)}
          onSubmit={updateCardOnSubmit}
          onValueChange={setOption}
          options={options}
          selectOption={option}
        />
      </Modal>

      <IconButton
        icon={
          <Icon height={'16px'} name={'edit'} onClick={() => setOpenModal(true)} width={'16px'} />
        }
      />
    </>
  )
}
