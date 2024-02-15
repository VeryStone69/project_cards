import { useState } from 'react'

import { CreateAndModifyDeckForm } from '@/components/forms/add-deck-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'

type Props = {
  cover: string
  id: string
  isPrivate: boolean
  name: string
}
export const EditPack = ({ cover, id, isPrivate, name }: Props) => {
  const defaultValue = { cover, isPrivate, name }
  const [open, setOpen] = useState(false)
  const [updateDeck] = useUpdateDeckMutation()
  const editDeckHandler = async (data: FormData) => {
    setOpen(!open)
    await updateDeck({ data, id }).unwrap()
  }

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Edit Pack'}>
          <CreateAndModifyDeckForm
            defaultValue={defaultValue}
            onCancel={() => setOpen(false)}
            onSubmit={editDeckHandler}
          />
        </Modal>
      )}
      <IconButton
        icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
      />
    </>
  )
}
