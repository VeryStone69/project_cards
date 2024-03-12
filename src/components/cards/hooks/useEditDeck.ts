import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'

export const useEditDeck = (deckId: string) => {
  const [editDeckModal, setEditDeckModal] = useState(false)

  const [updateDeck] = useUpdateDeckMutation()
  const { t } = useTranslation()

  const editDeckHandler = async (data: FormData) => {
    try {
      await toast.promise(updateDeck({ data, id: deckId }).unwrap, {
        pending: t('editDeckModal.toast.pending'),
        success: t('editDeckModal.toast.success'),
      })
    } catch (error) {
      toast.error(t('editDeckModal.toast.error'))
    }
    setEditDeckModal(false)
  }

  return {
    editDeckHandler,
    editDeckModal,
    setEditDeckModal,
  }
}
