import { useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: {
    open: false,
    setOpen: () => {},
    title: 'test',
  },
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/delete-card-button',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <IconButton icon={<Icon name={'remove'} size={'16px'} />} onClick={() => setOpen(true)} />
        {open && (
          <Modal open setOpen={() => setOpen(false)} title={'Delete card'}>
            <Typography variant={'body1'}>
              Do you really want to remove card? Сard will be deleted.
            </Typography>
            <ButtonFooter
              onClickCancel={() => setOpen(false)}
              onClickConfirm={() => {}}
              option={2}
            />
          </Modal>
        )}
      </>
    )
  },
}
