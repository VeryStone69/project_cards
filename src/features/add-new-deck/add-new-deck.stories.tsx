import ButtonBlock from '@/components/button-block/button-block'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import AddNewDeck from '@/features/add-new-deck/add-new-deck'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/features/add-new-deck/add-new-deck.module.scss'

import notImg from '../../assets/images/not-img.jpg'

const meta = {
  component: AddNewDeck,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/add-new-deck',
} satisfies Meta<typeof AddNewDeck>

export default meta
type Story = StoryObj<typeof meta>

export const AddDeckButton: Story = {
  render: () => {
    return (
      <Typography variant={'subtitle2'}>
        <Button variant={'primary'}>Add New Deck</Button>
      </Typography>
    )
  },
}

export const AddDeckModal: Story = {
  render: () => {
    return (
      <Modal open title={'Creating a new deck'}>
        <div className={s.inputBlock}>
          <img alt={'notImg'} src={notImg} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change image</Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>
          <TextField label={'Deck name'} />

          <Typography variant={'body2'}>
            <Checkbox label={'Private deck'} />
          </Typography>
        </div>

        <ButtonBlock primary={'Create a deck'} secondary={'Cancel'} />
      </Modal>
    )
  },
}
