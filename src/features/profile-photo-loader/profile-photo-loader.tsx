import { Icon } from '@/components/icon/Icon'
import { FileUploader } from '@/components/ui/file-uploader'
import { IconButton } from '@/components/ui/icon-button'
import { useProfilePhotoLoader } from '@/features/profile-photo-loader/hook/use-profile-photo-loader'

import s from './profile-photo-loader.module.scss'

type Props = {
  avatar: string | undefined
}
export const ProfilePhotoLoader = ({ avatar }: Props) => {
  const { deleteAvatar, onChangeHandler } = useProfilePhotoLoader()

  return (
    <div className={s.fileUploader}>
      {avatar && (
        <IconButton
          className={s.remove}
          icon={<Icon fill={'remove'} name={'close'} size={'16px'} />}
          onClick={deleteAvatar}
        />
      )}
      <FileUploader className={s.editButton} name={'avatar'} onChange={onChangeHandler}>
        <Icon fill={'white'} name={'edit'} size={'16px'} />
      </FileUploader>
    </div>
  )
}
