import { Icon } from '@/components/icon/Icon'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader'
import { Meta } from '@storybook/react'

import s from '@/components/ui/file-uploader/file-uploader.module.scss'

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
    return (
      <div className={s.root}>
        <Icon
          className={s.editButton}
          fill={'white'}
          height={'15px'}
          name={'edit'}
          width={'15px'}
        />
      </div>
    )
  },
}
