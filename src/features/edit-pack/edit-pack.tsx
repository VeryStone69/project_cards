import { useState } from 'react'

import { CreateAndModifyDeckForm } from '@/components/forms/create-and-modify-deck-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'
import { toast } from 'react-toastify'

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

    try {
      await toast.promise(updateDeck({ data, id }).unwrap(), {
        pending: 'Deck update...',
        success: `Deck updated successfully!`,
      })
    } catch (err) {
      toast.error('Error updating deck :(')
    }
  }

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Editing a Deck'}>
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
