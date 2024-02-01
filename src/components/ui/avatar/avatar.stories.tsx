import { useEffect, useState } from 'react'

import { Avatar } from '@/components/ui/avatar/avatar'
import { Meta, StoryObj } from '@storybook/react'

import avatar from '../../../assets/images/avatar.jpg'

const meta = {
  args: { userName: 'Alex' },
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/ui/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarUserFallback: Story = {}
export const AvatarUserPhoto: Story = {
  args: { src: avatar },
}
export const AvatarLoading = {
  args: {},
  render: () => {
    const [img, setImg] = useState<string | undefined>(undefined)

    useEffect(() => {
      const id = setTimeout(() => {
        setImg(avatar)
      }, 3000)

      return () => {
        clearInterval(id)
      }
    }, [])

    return <Avatar src={img} userName={'User'} />
  },
}
