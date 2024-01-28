import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import AddNewCard from '@/features/add-new-card/add-new-card'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/features/add-new-card/add-new-card.module.scss'

const meta = {
  component: AddNewCard,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/add-new-card',
} satisfies Meta<typeof AddNewCard>

export default meta
type Story = StoryObj<typeof meta>

export const AddCardButton: Story = {
  render: () => {
    return (
      <Typography variant={'subtitle2'}>
        <Button variant={'primary'}>Add New Card</Button>
      </Typography>
    )
  },
}

export const AddCardModal: Story = {
  render: () => {
    return (
      <Modal open title={'Add New Deck'}>
        <div className={s.inputBlock}>
          <TextField label={'Pack name'} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Upload Image</Button>
            <Icon className={s.imgOnButton} name={'img'} />
          </Typography>
          <Typography variant={'body2'}>
            <Checkbox label={'Private pack'} />
          </Typography>
        </div>

        <div className={s.buttonBlock}>
          <Typography variant={'subtitle2'}>
            <Button variant={'secondary'}>Cancel</Button>
          </Typography>
          <Typography variant={'subtitle2'}>
            <Button variant={'primary'}>Add New Pack</Button>
          </Typography>
        </div>
      </Modal>
    )
  },
}
