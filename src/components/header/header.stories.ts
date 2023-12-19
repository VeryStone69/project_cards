import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/header/header'

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

export const AuthorizedUser: Story = {
  args: {
    data: {
      avatar: '',
      email: 'junior.gmail.com',
      name: 'Artyom Korshykau',
    },
    logout: () => {},
  },
}

export const UnauthorizedUser: Story = {
  args: {
    data: null,
    logout: () => {},
  },
}
