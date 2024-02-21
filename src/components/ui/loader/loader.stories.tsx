import type { Meta, StoryObj } from '@storybook/react'

import { InitialLoader } from '@/components/ui/loader/loader'

const meta = {
  component: InitialLoader,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/ui/Loader',
} satisfies Meta<typeof InitialLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Loader: Story = {
  args: {
    preLoader: true,
  },
}
