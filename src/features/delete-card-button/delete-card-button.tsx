import { memo, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { useDeleteCardMutation } from '@/services/cards-api/cards-api'

type Props = {
  id: string
  name: string
}
export const DeleteCardButton = memo(({ id, name }: Props) => {
  const [open, setOpen] = useState(false)
  const [delCard] = useDeleteCardMutation()
  const { t } = useTranslation()

  const deleteCard = async () => {
    try {
      await toast.promise(delCard({ id }).unwrap, {
        pending: t('deleteCardModal.toast.pending'),
        success: t('deleteCardModal.toast.success'),
      })
    } catch (error) {
      toast.error(t('deleteCardModal.toast.error'))
    }
    setOpen(false)
  }

  return (
    <>
      <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
      {open && (
        <Modal open setOpen={() => setOpen(false)} title={t('deleteCardModal.title')}>
          <Typography variant={'body1'}>
            <Trans>{t('deleteCardModal.description', { name })}</Trans>
          </Typography>
          <ButtonFooter
            onClickCancel={() => setOpen(false)}
            onClickConfirm={deleteCard}
            option={2}
            titleCancel={t('deleteCardModal.cancel')}
            titleConfirm={t('deleteCardModal.remove')}
          />
        </Modal>
      )}
    </>
  )
})
