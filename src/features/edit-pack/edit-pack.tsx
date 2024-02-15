import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { AddDeckForm } from '@/components/forms/add-deck-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'
import { PackFormType } from '@/utils/zod-resolvers/file-update-resolver'

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
  const onSubmit: SubmitHandler<PackFormType> = async data => {
    console.log(data)
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)

    if (data.cover === null) {
      form.append('cover', '')
    } else {
      form.append('cover', data.cover || '')
    }
    setOpen(!open)
    await updateDeck({ data: form, id }).unwrap()
  }

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Edit Pack'}>
          <AddDeckForm
            defaultValue={defaultValue}
            onCancel={() => setOpen(false)}
            onSubmit={onSubmit}
          />
        </Modal>
      )}
      <IconButton
        icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
      />
    </>
  )
}
