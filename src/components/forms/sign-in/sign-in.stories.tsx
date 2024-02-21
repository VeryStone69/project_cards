import type { Meta, StoryObj } from '@storybook/react'

import { FormValues } from '@/utils/zod-resolvers/file-update-resolver'

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
    const onSubmit = (data: FormValues) => {
      console.log(data)
    }

    return <SignIn onSubmit={onSubmit} />
  },
}
