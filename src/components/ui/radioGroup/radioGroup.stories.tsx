import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { RadioGroup } from './'
const meta = {
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/ui/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupUncontrolled: Story = {
  args: {
    options: [
      { title: 'Radio button 1', value: '1' },
      { title: 'Radio button 2', value: '2' },
      { title: 'Radio button 3', value: '3' },
    ],
  },
}
export const RadioGroupControlled: Story = {
  args: {
    options: [
      { title: 'Radio button 1', value: '1' },
      { title: 'Radio button 2', value: '2' },
      { title: 'Radio button 3', value: '3' },
    ],
  },
  render: () => {
    const [value, setValue] = useState('')

    return (
      <>
        <RadioGroup
          onValueChange={value => setValue(value)}
          options={[
            { title: 'Radio button 1', value: '1' },
            { title: 'Radio button 2', value: '2' },
            { title: 'Radio button 3', value: '3' },
          ]}
          value={value}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          Radio button:{value}
        </div>
      </>
    )
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
    options: [
      { title: 'Radio button 1', value: '1' },
      { title: 'Radio button 2', value: '2' },
      { title: 'Radio button 3', value: '3' },
    ],
    value: '1',
  },
}

export const RadioGroupWithError: Story = {
  args: {
    disabled: true,
    error: 'Error',
    options: [
      { title: 'Radio button 1', value: '1' },
      { title: 'Radio button 2', value: '2' },
      { title: 'Radio button 3', value: '3' },
    ],
    value: '1',
  },
}
