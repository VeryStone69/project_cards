import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { CreateAndModifyDeckForm } from '@/components/forms/create-and-modify-deck-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateDecksMutation } from '@/services/decks-api/decks-api'

export const AddNewDeck = () => {
  const [open, setOpen] = useState(false)
  const [createDeck] = useCreateDecksMutation()
  const { t } = useTranslation()
  const addDeckHandler = async (data: FormData) => {
    setOpen(!open)
    try {
      await toast.promise(createDeck(data).unwrap(), {
        pending: t('addDeckModal.toast.pending'),
        success: t('addDeckModal.toast.success'),
      })
    } catch (err) {
      toast.error(t('addDeckModal.toast.error'))
    }
  }

  return (
    <div>
      {open && (
        <Modal open={open} setOpen={setOpen} title={t('addDeckModal.title')}>
          <CreateAndModifyDeckForm onCancel={() => setOpen(false)} onSubmit={addDeckHandler} />
        </Modal>
      )}

      <Typography variant={'subtitle2'}>
        <Button onClick={() => setOpen(!open)} variant={'primary'}>
          {t('decks.addNewDeck.title')}
        </Button>
      </Typography>
    </div>
  )
}
