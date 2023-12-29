import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword, FormValues } from './forgot-password'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Components/Forms/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordForm: Story = {
  args: {} as any,
  render: () => {
    const onSubmit = (data: FormValues) => {
      console.log(data)
    }

    return <ForgotPassword onSubmit={onSubmit} />
  },
}
