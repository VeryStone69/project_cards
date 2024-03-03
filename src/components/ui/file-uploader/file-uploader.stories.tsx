import { FileUploader } from '@/components/ui/file-uploader/file-uploader'
import { Meta } from '@storybook/react'

import s from '../../../features/profile-photo-loader/profile-photo-loader.module.scss'

const meta = {
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ui/File-uploader',
} satisfies Meta<typeof FileUploader>

export default meta

export const Default = {
  render() {
    return <FileUploader className={s.editButton} name={'edit'} onChange={() => {}} />
  },
}
