import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { CreateAndModifyDeckForm } from '@/components/forms/create-and-modify-deck-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { useUpdateDeckMutation } from '@/services/decks-api/decks-api'

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
  const { t } = useTranslation()
  const editDeckHandler = async (data: FormData) => {
    setOpen(!open)

    try {
      await toast.promise(updateDeck({ data, id }).unwrap(), {
        pending: t('editDeckModal.toast.pending'),
        success: t('editDeckModal.toast.success'),
      })
    } catch (err) {
      toast.error(t('editDeckModal.toast.error'))
    }
  }

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={t('editDeckModal.title')}>
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
