import { useState } from 'react'
import { toast } from 'react-toastify'
import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'

export const useEditDeck = (deckId: string) => {
  const [editDeckModal, setEditDeckModal] = useState(false)

  const [updateDeck] = useUpdateDeckMutation()

  const editDeckHandler = async (data: FormData) => {
    try {
      await toast.promise(updateDeck({ data, id: deckId }).unwrap, {
        pending: 'Editing a Deck!',
        success: 'The deck has been edited!',
      })
    } catch (error) {
      toast.error('Error editing deck :(')
    }
    setEditDeckModal(false)
  }

  return {
    editDeckHandler,
    editDeckModal,
    setEditDeckModal,
  }
}
