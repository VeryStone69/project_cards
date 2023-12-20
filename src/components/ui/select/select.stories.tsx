import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Select } from './'
const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
const data = [
  { title: 'apple', value: '1' },
  { title: 'banana', value: '2' },
  { title: 'juice', value: '3' },
  { title: 'cherry', value: '4' },
]

export const SelectUncontrolled: Story = {
  args: {
    label: 'Story',
    options: data,
    placeholder: 'Click me',
  },
}
export const SelectControlled: Story = {
  args: {
    label: 'Story',
    options: data,
  },
  render: () => {
    const [value, setValue] = useState('')
    const choice = data.reduce((acc, item) => (item.value === value ? item.title : acc), '')

    return (
      <>
        <Select
          label={'Story'}
          onValueChange={value => setValue(value)}
          options={data}
          placeholder={'Click me'}
          value={value}
        />
        <div style={{ color: 'inherit', zIndex: '-1' }}>Your choice: {choice}</div>
      </>
    )
  },
}
export const SelectSmall: Story = {
  args: {
    label: 'Story',
    options: data,
    placeholder: 'click me',
    sizeSelect: 'small',
  },
}
export const SelectDisabled: Story = {
  args: {
    disabled: true,
    label: 'Story',
    options: data,
    placeholder: 'click me',
  },
}
