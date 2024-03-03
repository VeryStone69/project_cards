import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '@/components/header/header'
import { store } from '@/services/store'

const meta = {
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>
const data = {
  avatar: '',
  email: 'junior.gmail.com',
  userName: 'Artyom Korshykau',
}

export const AuthorizedUser: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Header avatar={data.avatar} email={data.email} userName={data.userName} />
        </Provider>
      </BrowserRouter>
    )
  },
}

export const UnauthorizedUser: Story = {
  args: {},
  render: () => {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
  },
}
