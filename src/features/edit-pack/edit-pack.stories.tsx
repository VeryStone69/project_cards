import { useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { EditPack } from '@/features/edit-pack/edit-pack'
import { Meta, StoryObj } from '@storybook/react'

import notImg from '../../assets/images/not-img.jpg'

const meta = {
  component: EditPack,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/edit-pack',
} satisfies Meta<typeof EditPack>

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
                <Button fullWidth variant={'secondary'}>
                  Change cover
                </Button>
                <Icon
                  name={'img'}
                  style={{ left: '195px', position: 'relative', top: '-29px' }}
                  viewBox={'0 0 18 18'}
                />
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
