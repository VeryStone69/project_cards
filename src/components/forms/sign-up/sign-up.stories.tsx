import type { Meta, StoryObj } from '@storybook/react'

import { BrowserRouter } from 'react-router-dom'

import { RegisterForm } from '@/utils/zod-resolvers/file-update-resolver'

import { SignUp } from './sign-up'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Components/Forms/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignUpForm: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: RegisterForm) => {
      console.log(data)
    }

    return (
      <BrowserRouter>
        <SignUp onSubmit={onSubmit} />
      </BrowserRouter>
    )
  },
}
