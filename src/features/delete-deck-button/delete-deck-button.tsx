import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { useDeleteDeckMutation } from '@/services/decks-api/decks-api'

type Props = {
  id: string
  name: string
}
export const DeleteDeckButton = memo(({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const [delDeck] = useDeleteDeckMutation()
  const { t } = useTranslation()
  const deleteCard = useCallback(async () => {
    setOpen(false)

    try {
      await toast.promise(delDeck({ id }).unwrap(), {
        pending: t('deleteDeckModal.toast.pending'),
        success: t('deleteDeckModal.toast.success'),
      })
    } catch (err) {
      toast.error(t('deleteDeckModal.toast.error'))
    }
  }, [delDeck, id])

  return (
    <>
      <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
      {open && (
        <Modal open setOpen={() => setOpen(false)} title={t('deleteDeckModal.title')}>
          <Typography variant={'body1'}>{t('deleteDeckModal.description', { name })}</Typography>
          <ButtonFooter
            onClickCancel={() => setOpen(false)}
            onClickConfirm={deleteCard}
            option={2}
            titleCancel={t('deleteDeckModal.cancel')}
            titleConfirm={t('deleteDeckModal.remove')}
          />
        </Modal>
      )}
    </>
  )
})
