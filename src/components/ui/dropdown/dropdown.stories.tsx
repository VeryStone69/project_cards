import DropdownMenuDemo from '@/components/ui/dropdown/Dropdown'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropdownMenuDemo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Components/DropdownMenuDemo',
} satisfies Meta<typeof DropdownMenuDemo>

export default meta
type Story = StoryObj<typeof meta>

export const DropDown: Story = {
  args: {
    label: 'This is dropdown',
  },
  render: function Render(args) {
    return (
      <>
        <DropdownMenuDemo {...args} />
      </>
    )
  },
}
