import { ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { useUpdateProfileMutation } from '@/services/auth-api/auth'
import { errorNotification } from '@/utils/error-notification/error-notification'
import { coverSchema } from '@/utils/zod-resolvers/file-update-resolver'
import * as z from 'zod'

export const useProfilePhotoLoader = () => {
  const [updateProfile] = useUpdateProfileMutation()
  const { t } = useTranslation()

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target?.files?.[0]

      e.target.value = ''
      coverSchema.parse(file)
      const form = new FormData()

      form.append('avatar', file || '')

      await toast.promise(updateProfile(form).unwrap(), {
        pending: t('photo.load.toast.pending'),
        success: t('photo.load.toast.success'),
      })
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(t(`validate.${err.issues[0].message}`))
      } else {
        errorNotification(err)
      }
    }
  }
  const deleteAvatar = async () => {
    const form = new FormData()

    form.append('avatar', '')
    try {
      await toast.promise(updateProfile(form).unwrap(), {
        pending: t('photo.load.toast.pending'),
        success: t('photo.load.toast.success'),
      })
    } catch (err) {
      errorNotification(err)
    }
  }

  return {
    deleteAvatar,
    onChangeHandler,
  }
}
