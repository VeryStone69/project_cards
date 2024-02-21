import type { Meta, StoryObj } from '@storybook/react'

import { RegisterForm } from '@/utils/zod-resolvers/file-update-resolver'

import { SignUp } from './sign-up'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Components/Forms/SignUn',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignInForm: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: RegisterForm) => {
      console.log(data)
    }

    return <SignUp onSubmit={onSubmit} />
  },
}
