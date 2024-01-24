import { BrowserRouter } from 'react-router-dom'

import { BackButton } from '@/components/ui/back-button/back-button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: BackButton,
  tags: ['autodocs'],
  title: 'Components/ui/Back Button',
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>
    )
  },
}
