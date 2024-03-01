import { useState } from 'react'
import { toast } from 'react-toastify'

import { CreateAndModifyDeckForm } from '@/components/forms/create-and-modify-deck-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateDecksMutation } from '@/services/decks-api/decks-api'

export const AddNewDeck = () => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDecksMutation()
  const addDeckHandler = async (data: FormData) => {
    setOpen(!open)
    try {
      await toast.promise(createDeck(data).unwrap(), {
        pending: 'Adding a deck...',
        success: `Deck added successfully!`,
      })
    } catch (err) {
      toast.error('Error adding deck :(')
    }
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
          Add a new deck
        </Button>
      </Typography>
    </div>
  )
}
