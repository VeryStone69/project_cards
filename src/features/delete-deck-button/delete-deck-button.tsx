import { memo, useCallback, useState } from 'react'

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
  const [delCard] = useDeleteDeckMutation()
  const deleteCard = useCallback(() => {
    delCard({ id }).finally(() => {
      setOpen(false)
    })
  }, [id])

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
