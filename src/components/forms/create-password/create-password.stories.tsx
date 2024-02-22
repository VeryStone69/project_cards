import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/utils/zod-resolvers/file-update-resolver'

import { CreatePassword } from './create-password'

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
    const onSubmit = (data: CreateNewPasswordForm) => {
      console.log(data)
    }

    return <CreatePassword onSubmit={onSubmit} />
  },
}
