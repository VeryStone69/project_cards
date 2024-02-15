import { useState } from 'react'

import { CreateAndModifyDeckForm } from '@/components/forms/add-deck-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateDecksMutation } from '@/services/decks-api/decks-api'

export const AddNewDeck = () => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDecksMutation()
  const addDeckHandler = async (data: FormData) => {
    setOpen(!open)
    await createDeck(data).unwrap()
  }

  return (
    <div>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Creating a new deck'}>
          <CreateAndModifyDeckForm onCancel={() => setOpen(false)} onSubmit={addDeckHandler} />
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
