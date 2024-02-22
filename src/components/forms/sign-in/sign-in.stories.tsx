import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/utils/zod-resolvers/file-update-resolver'

import { SignIn } from './sign-in'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Components/Forms/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: CreateNewPasswordForm) => {
      console.log(data)
    }

    return <SignIn onSubmit={onSubmit} />
  },
}
