import { useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Checkbox } from '@/components/ui/checkBox'
import { FileUploader } from '@/components/ui/file-uploader'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/components/forms/create-and-modify-deck-form/create-and-modify-deck-form.module.scss'

import notImg from '../../assets/images/not-img.jpg'

const meta = {
  args: { open: false, setOpen: () => {}, title: 'test' },
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/edit-pack',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const EditPackModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        {open && (
          <Modal open setOpen={setOpen} title={'Edit a Pack'}>
            <div
              style={{
                alignItems: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <img alt={'notImg'} src={notImg} />

              <Typography style={{ height: '36px' }} variant={'subtitle2'}>
                <FileUploader
                  name={'test'}
                  onChange={() => {}}
                  style={{ width: '100%' }}
                  variant={'secondary'}
                >
                  <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
                  <Typography variant={'subtitle2'}>Upload Image</Typography>
                </FileUploader>
              </Typography>
              <TextField label={'Pack name'} />

              <Typography variant={'body2'}>
                <Checkbox label={'Private pack'} />
              </Typography>
            </div>
            <ButtonFooter
              onClickCancel={() => setOpen(false)}
              option={2}
              titleCancel={'Cancel'}
              titleConfirm={'Save changes'}
            />
          </Modal>
        )}
        <IconButton
          icon={<Icon height={'16px'} name={'edit'} width={'16px'} />}
          onClick={() => setOpen(true)}
        />
      </>
    )
  },
}
