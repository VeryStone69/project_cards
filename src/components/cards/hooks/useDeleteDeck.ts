import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useDeleteDeckMutation } from '@/services/decks-api/decks-api'

export const useDeleteDeck = (deckId: string) => {
  const [deleteDeckModal, setDeleteDeckModal] = useState(false)

  const [delDeck] = useDeleteDeckMutation()
  const { t } = useTranslation()

  const navigate = useNavigate()

  const deleteDeckHandler = useCallback(async () => {
    try {
      await toast.promise(delDeck({ id: deckId as string }).unwrap, {
        pending: t('deleteDeckModal.toast.pending'),
        success: t('deleteDeckModal.toast.success'),
      })
    } catch (error) {
      toast.error(t('deleteDeckModal.toast.error'))
    }
    setDeleteDeckModal(false)
    navigate('/decks')
  }, [delDeck, deckId])

  return {
    deleteDeckHandler,
    deleteDeckModal,
    setDeleteDeckModal,
  }
}
