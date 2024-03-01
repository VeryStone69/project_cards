import { useState } from 'react'

import { CreateAndModifyCardForm } from '@/components/forms/create-and-modify-card-form'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
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
  title: 'Components/features/add-new-card',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCard: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [option, setOption] = useState('1')
    const options = [
      {
        title: 'Text',
        value: '1',
      },
      {
        title: 'Picture',
        value: '2',
      },
    ]

    return (
      <div>
        {open && (
          <Modal open={open} setOpen={setOpen} title={'Creating a new deck'}>
            <CreateAndModifyCardForm
              onCancel={() => setOpen(false)}
              onSubmit={() => {}}
              onValueChange={setOption}
              options={options}
              selectOption={option}
            />
          </Modal>
        )}

        <Typography variant={'subtitle2'}>
          <Button onClick={() => setOpen(!open)} variant={'primary'}>
            Add a new card
          </Button>
        </Typography>
      </div>
    )
  },
}
