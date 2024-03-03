import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

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
  args: {},
  render: () => {
    const onSubmit = (data: CreateNewPasswordForm) => {
      console.log(data)
    }

    return (
      <BrowserRouter>
        <SignIn onSubmit={onSubmit} />
      </BrowserRouter>
    )
  },
}
