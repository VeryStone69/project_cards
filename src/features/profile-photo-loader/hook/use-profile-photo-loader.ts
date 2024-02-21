import { ChangeEvent } from 'react'
import { toast } from 'react-toastify'

import { useUpdateProfileMutation } from '@/services/auth-api/auth'
import { coverSchema } from '@/utils/zod-resolvers/file-update-resolver'
import * as z from 'zod'

export const useProfilePhotoLoader = () => {
  const [updateProfile] = useUpdateProfileMutation()

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target?.files?.[0]

      coverSchema.parse(file)
      const form = new FormData()

      form.append('avatar', file || '')

      await toast.promise(updateProfile(form).unwrap(), {
        pending: 'avatar is updating',
        success: 'avatar successful changed',
      })
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast.error(err.issues[0].message)
      } else {
        toast.error('avatar not upload')
      }
    }
  }
  const deleteAvatar = async () => {
    const form = new FormData()

    form.append('avatar', '')
    try {
      await toast.promise(updateProfile(form).unwrap(), {
        pending: 'avatar is deleting',
        success: 'avatar successful deleted',
      })
    } catch (err) {
      toast.error('avatar not deleted')
    }
  }

  return {
    deleteAvatar,
    onChangeHandler,
  }
}
