import { Meta, StoryObj } from '@storybook/react'

import { CardForm } from './'

const meta = {
  component: CardForm,
  title: 'Forms/Card',
} satisfies Meta<typeof CardForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
