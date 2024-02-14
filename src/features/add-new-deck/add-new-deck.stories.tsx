import { useState } from 'react'

import { AddDeckForm } from '@/components/forms/add-deck-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: { open: false, setOpen: () => {}, title: 'test' },
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/add-new-deck',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const AddDeck: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        {open && (
          <Modal open={open} setOpen={setOpen} title={'Creating a new deck'}>
            <AddDeckForm onCancel={() => setOpen(false)} onSubmit={() => {}} />
          </Modal>
        )}

        <Typography variant={'subtitle2'}>
          <Button onClick={() => setOpen(!open)} variant={'primary'}>
            Add New Deck
          </Button>
        </Typography>
      </div>
    )
  },
}
