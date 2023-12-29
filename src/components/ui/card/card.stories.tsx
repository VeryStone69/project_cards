import { SignIn } from '@/components/forms/sign-in'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  title: 'Components/ui/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = {
  args: {
    children: <Typography variant={'large'}></Typography>,
    style: {
      height: '520px',
      padding: '24px',
      width: '420px',
    },
  },
}

export const LoginCard: Story = {
  args: {
    children: <SignIn onSubmit={() => {}}></SignIn>,
    style: {
      height: '520px',
      padding: '24px',
      width: '420px',
    },
  },
}
