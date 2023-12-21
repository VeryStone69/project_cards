import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TabSwitcher } from '@/components/ui/tabSwitcher/TabSwitcher'

const meta = {
  component: TabSwitcher,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>
const tabs = [
  { disabled: false, title: 'My cards', value: 'My cards' },
  { disabled: false, title: 'All cards', value: 'All cards' },
  { disabled: false, title: 'Title', value: 'Title' },
  { disabled: true, title: 'Disabled', value: 'Disabled' },
]

export const Tab: Story = {
  args: {
    tabs,
    value: '',
  },
  render: () => {
    const [title, setTitle] = useState('')

    return (
      <>
        <TabSwitcher onValueChange={value => setTitle(value)} tabs={tabs} value={title} />
        <div style={{ marginTop: '10px' }}>TabSwitcher is {title}</div>
      </>
    )
  },
}
