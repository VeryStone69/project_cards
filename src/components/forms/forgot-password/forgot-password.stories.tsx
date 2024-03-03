import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/services/store'
import { FormValuesForgotPassword } from '@/utils/zod-resolvers/file-update-resolver'

import { ForgotPassword } from './forgot-password'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Components/Forms/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordForm: Story = {
  args: {},
  render: () => {
    const onSubmit = (data: FormValuesForgotPassword) => {
      console.log(data)
    }

    return (
      <BrowserRouter>
        <Provider store={store}>
          <ForgotPassword onSubmit={onSubmit} />
        </Provider>
      </BrowserRouter>
    )
  },
}
