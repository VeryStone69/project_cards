import { memo, useCallback, useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { useDeleteDeckMutation } from '@/services/decks-api/decks-api'
import { errorNotification } from '@/utils/error-notification/error-notification'

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
      await delDeck({ id }).unwrap()
    } catch (err) {
      errorNotification(err)
    }
  }, [delDeck, id])

  return (
    <>
      <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
      {open && (
        <Modal open setOpen={() => setOpen(false)} title={'Delete Deck'}>
          <Typography variant={'body1'}>
            Do you really want to remove {name}?All Cards will be deleted.
          </Typography>
          <ButtonFooter
            onClickCancel={() => setOpen(false)}
            onClickConfirm={deleteCard}
            option={2}
            titleConfirm={'delete deck'}
          />
        </Modal>
      )}
    </>
  )
})
