import { useState } from 'react'
import { toast } from 'react-toastify'

import { CreateAndModifyCardForm } from '@/components/forms/create-and-modify-card-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateCardsInDeckMutation } from '@/services/cards-api/cards-api'

type Props = {
  deckId?: string
}

export const AddNewCard = ({ deckId = '' }: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const [option, setOption] = useState('1')
  const [createCard] = useCreateCardsInDeckMutation()
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

  const addCardOnSubmit = async (data: FormData) => {
    setOpenModal(false)
    try {
      await toast.promise(createCard({ data, id: deckId }), {
        pending: 'Creating a card!',
        success: 'The card has been created!',
      })
    } catch (error) {
      toast.error('Error creating card :(')
    }
  }

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} title={'Adding a new card'}>
        <CreateAndModifyCardForm
          onCancel={() => setOpenModal(false)}
          onSubmit={addCardOnSubmit}
          onValueChange={setOption}
          options={options}
          selectOption={option}
        />
      </Modal>

      <Button onClick={() => setOpenModal(!openModal)} variant={'primary'}>
        <Typography variant={'subtitle2'}>Add a new card</Typography>
      </Button>
    </>
  )
}
