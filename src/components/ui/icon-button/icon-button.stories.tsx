import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button/icon-button'
import { Meta } from '@storybook/react'

const meta = {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ui/Icon Button',
} satisfies Meta<typeof IconButton>

export default meta

export const Default = {
  render() {
    return (
      <div style={{ columnGap: '26px', display: 'flex' }}>
        <IconButton icon={<Icon name={'edit'} size={'16px'} />} />
        <IconButton icon={<Icon name={'play'} size={'16px'} />} />
        <IconButton icon={<Icon name={'remove'} size={'16px'} />} />
      </div>
    )
  },
}
