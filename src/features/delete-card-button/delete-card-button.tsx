import { memo, useState } from 'react'
import { toast } from 'react-toastify'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { useDeleteCardMutation } from '@/services/cards-api/cards-api'

type Props = {
  id: string
  name: string
}
export const DeleteCardButton = memo(({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const [delCard] = useDeleteCardMutation()

  const deleteCard = async () => {
    try {
      await toast.promise(delCard({ id }).unwrap, {
        pending: 'Deleting a card!',
        success: 'The card has been deleted!',
      })
    } catch (error) {
      toast.error('Error deleting card :(')
    }
    setOpen(false)
  }

  return (
    <>
      <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
      {open && (
        <Modal open setOpen={() => setOpen(false)} title={'Removing a card'}>
          <Typography variant={'body1'}>
            Are you sure you want to remove a card from the {name} deck?
          </Typography>
          <ButtonFooter
            onClickCancel={() => setOpen(false)}
            onClickConfirm={deleteCard}
            option={2}
            titleConfirm={'Remove'}
          />
        </Modal>
      )}
    </>
  )
})
