import type { Meta, StoryObj } from '@storybook/react'

import { CreatePassword, FormValues } from './create-password'

const meta = {
  component: CreatePassword,
  tags: ['autodocs'],
  title: 'Components/Forms/CreatePassword',
} satisfies Meta<typeof CreatePassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreatePasswordFrom: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValues) => {
      console.log(data)
    }

    return <CreatePassword onSubmit={onSubmit} />
  },
}
