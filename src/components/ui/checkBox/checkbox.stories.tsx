import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './'
const meta = {
  argTypes: {},
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    label: 'This is checkBox',
  },
}
export const Checked: Story = {
  args: {
    checked: true,
    label: 'This is checkBox',
  },
}
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'This is checkBox',
  },
}
export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'This is checkBox',
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'This is checkBox',
  },
  render: function Render(args) {
    const [isChecked, updateArgs] = useState(false)

    function onChange() {
      updateArgs(!isChecked)
    }

    return (
      <>
        <Checkbox {...args} checked={isChecked} onChange={onChange} />
        <div>CheckBox is {isChecked ? 'true' : 'false'}</div>
      </>
    )
  },
}
