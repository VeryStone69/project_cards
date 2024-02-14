import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { AddDeckForm } from '@/components/forms/add-deck-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateDecksMutation } from '@/services/decks-api/decks-api'
import { PackFormType } from '@/utils/zod-resolvers/file-update-resolver'

export const AddNewDeck = () => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDecksMutation()
  const onSubmit: SubmitHandler<PackFormType> = async data => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)

    if (data.cover === null) {
      form.append('cover', '')
    } else {
      form.append('cover', data.cover || '')
    }
    setOpen(!open)
    await createDeck(form).unwrap()
  }

  return (
    <div>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Creating a new deck'}>
          <AddDeckForm onCancel={() => setOpen(false)} onSubmit={onSubmit} />
        </Modal>
      )}

      <Typography variant={'subtitle2'}>
        <Button onClick={() => setOpen(!open)} variant={'primary'}>
          Add New Deck
        </Button>
      </Typography>
    </div>
  )
}
