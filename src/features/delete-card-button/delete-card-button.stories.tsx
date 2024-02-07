import { Provider } from 'react-redux'

import { DeleteCardButton } from '@/features/delete-card-button/delete-card-button'
import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: DeleteCardButton,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/delete-card-button',
} satisfies Meta<typeof DeleteCardButton>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    id: '1',
    name: 'test',
  },
  render: () => {
    return (
      <>
        <Provider store={store}>
          <DeleteCardButton id={'1'} name={'Test'} />
        </Provider>
      </>
    )
  },
}
