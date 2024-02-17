import { ChangeEvent } from 'react'
import { toast } from 'react-toastify'

import { Icon } from '@/components/icon/Icon'
import { FileUploader } from '@/components/ui/file-uploader'
import { IconButton } from '@/components/ui/icon-button'
import { useUpdateProfileMutation } from '@/services/auth-api/auth'
import { coverSchema } from '@/utils/zod-resolvers/file-update-resolver'
import * as z from 'zod'

import s from '@/pages/profile/profile.module.scss'

export const ProfilePhotoLoader = () => {
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
      }
      toast.error('avatar not upload')
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

  return (
    <div className={s.fileUploader}>
      <IconButton
        className={s.remove}
        icon={<Icon fill={'remove'} name={'close'} size={'16px'} />}
        onClick={deleteAvatar}
      />
      <FileUploader className={s.editButton} name={'avatar'} onChange={onChangeHandler}>
        <Icon fill={'white'} name={'edit'} size={'16px'} />
      </FileUploader>
    </div>
  )
}
