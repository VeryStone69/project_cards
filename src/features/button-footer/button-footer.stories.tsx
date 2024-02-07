import { Modal } from '@/components/ui/modal'
import { ButtonFooter } from '@/features/button-footer/button-footer'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ButtonFooter,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/button-footer',
} satisfies Meta<typeof ButtonFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    return (
      <>
        <Modal open title={'Test button footer. option set to: 1 button'}>
          <ButtonFooter titleConfirm={'Confirm'} />
        </Modal>
      </>
    )
  },
}
export const TwoButton: Story = {
  render: () => {
    return (
      <>
        <Modal open title={'Test button footer. option set to: 2 button'}>
          <ButtonFooter option={2} titleConfirm={'Confirm'} />
        </Modal>
      </>
    )
  },
}
