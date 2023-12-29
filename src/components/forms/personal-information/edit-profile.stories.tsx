import type { Meta, StoryObj } from '@storybook/react'

import { EditProfile, FormValues } from './edit-profile'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Components/Forms/EditProfile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>

export const editProfileSchema: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValues) => {
      console.log(data)
    }

    return <EditProfile onSubmit={onSubmit} />
  },
}
