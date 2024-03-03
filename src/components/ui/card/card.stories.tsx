import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

import { Card } from './'

const meta = {
  component: Card,
  parameters: {
    layout: 'centered',
  },
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
