import type { Meta, StoryObj } from '@storybook/react'

import { AddCardForm } from '@/components/forms/add-card-form/card-form'

const meta = {
  component: AddCardForm,
  title: 'Components/Forms/Add-card-form',
} satisfies Meta<typeof AddCardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {} as any,
  render: () => {
    return (
      <AddCardForm
        onSubmit={() => {}}
        onValueChange={() => {}}
        options={[
          {
            title: 'Text',
            value: '1',
          },
          {
            title: 'Picture',
            value: '2',
          },
        ]}
      />
    )
  },
}
