import { memo, useCallback, useState } from 'react'
import { toast } from 'react-toastify'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { useDeleteDeckMutation } from '@/services/decks-api/decks-api'

type Props = {
  id: string
  name: string
}
export const DeleteDeckButton = memo(({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const [delDeck] = useDeleteDeckMutation()
  const deleteCard = useCallback(async () => {
    setOpen(false)

    try {
      await toast.promise(delDeck({ id }).unwrap(), {
        pending: 'Removing a deck...',
        success: `Deck deleted successfully!`,
      })
    } catch (err) {
      toast.error('Error deleting deck :(')
    }
  }, [delDeck, id])

  return (
    <>
      <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
      {open && (
        <Modal open setOpen={() => setOpen(false)} title={'Removing a deck'}>
          <Typography variant={'body1'}>Do you really want to remove the {name} deck?</Typography>
          <ButtonFooter
            onClickCancel={() => setOpen(false)}
            onClickConfirm={deleteCard}
            option={2}
            titleConfirm={'Delete'}
          />
        </Modal>
      )}
    </>
  )
})
