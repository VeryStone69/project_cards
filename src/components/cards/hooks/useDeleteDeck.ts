import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDeleteDeckMutation } from '@/services/decks-api/decks-api'

export const useDeleteDeck = (deckId: string) => {
  const [deleteDeckModal, setDeleteDeckModal] = useState(false)

  const [delDeck] = useDeleteDeckMutation()

  const navigate = useNavigate()

  const deleteDeckHandler = useCallback(async () => {
    try {
      await toast.promise(delDeck({ id: deckId as string }).unwrap, {
        pending: 'Removing a deck!',
        success: 'The deck has been removed!',
      })
    } catch (error) {
      toast.error('Error when deleting deck :(')
    }
    setDeleteDeckModal(false)
    navigate('/decks')
  }, [delDeck, deckId])

  return {
    deleteDeckModal,
    deleteDeckHandler,
    setDeleteDeckModal,
  }
}
