import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const [option, setOption] = useState('1')
  const [createCard] = useCreateCardsInDeckMutation()
  const options = [
    {
      title: t('addCardModal.select.text'),
      value: '1',
    },
    {
      title: t('addCardModal.select.picture'),
      value: '2',
    },
  ]

  const addCardOnSubmit = async (data: FormData) => {
    setOpenModal(false)
    try {
      await toast.promise(createCard({ data, id: deckId }), {
        pending: t('addCardModal.toast.pending'),
        success: t('addCardModal.toast.success'),
      })
    } catch (error) {
      toast.error(t('addCardModal.toast.error'))
    }
  }

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} title={t('addCardModal.title')}>
        <CreateAndModifyCardForm
          onCancel={() => setOpenModal(false)}
          onSubmit={addCardOnSubmit}
          onValueChange={setOption}
          options={options}
          selectOption={option}
        />
      </Modal>

      <Button onClick={() => setOpenModal(!openModal)} variant={'primary'}>
        <Typography variant={'subtitle2'}>{t('cards.addNewCard.title')}</Typography>
      </Button>
    </>
  )
}
