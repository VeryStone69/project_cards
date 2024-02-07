import { BrowserRouter } from 'react-router-dom'

import avatar from '@/assets/images/avatar.jpg'
import { Avatar } from '@/components/ui/avatar'
import { Dropdown } from '@/components/ui/dropdown/Dropdown'
import { DropdownCard } from '@/features/dropdown-card'
import { DropDownUser } from '@/features/dropdown-user'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/components/header/header.module.scss'

const meta = {
  args: { align: 'center', className: '', trigger: '' },
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/ui/DropdownMenu',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const DropDownWithUser: Story = {
  args: { align: 'center', children: '', className: '', key: '', ref: null, trigger: '' },
  parameters: { layout: 'centered' },
  render: () => {
    const data = {
      email: 'example@gmail.com',
      name: 'User',
    }

    return (
      <BrowserRouter>
        <Dropdown
          sideOffset={-7}
          trigger={
            <button>
              <Avatar className={s.userPhoto} src={avatar} userName={data.name} />
            </button>
          }
        >
          <DropDownUser userEmail={data.email} userLogo={avatar} userName={data.name} />
        </Dropdown>
      </BrowserRouter>
    )
  },
}

export const DropDownWithSvg: Story = {
  args: { align: 'start', children: '', className: '', key: '', ref: null, trigger: '' },
  parameters: { layout: 'centered' },
  render: () => {
    return (
      <Dropdown sideOffset={10}>
        <DropdownCard />
      </Dropdown>
    )
  },
}
