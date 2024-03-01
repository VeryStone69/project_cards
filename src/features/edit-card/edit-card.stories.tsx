import { useState } from 'react'

import { CreateAndModifyCardForm } from '@/components/forms/create-and-modify-card-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
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
  title: 'Components/features/edit-card',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const EditCard: Story = {
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
          <Modal open={open} setOpen={setOpen} title={'Editing a card'}>
            <CreateAndModifyCardForm
              defaultValue={{}}
              onCancel={() => setOpen(false)}
              onSubmit={() => {}}
              onValueChange={setOption}
              options={options}
              selectOption={option}
            />
          </Modal>
        )}

        <IconButton
          icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
        />
      </div>
    )
  },
}
