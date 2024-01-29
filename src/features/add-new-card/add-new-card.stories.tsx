import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
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
  title: 'Components/features/add-new-card',
} satisfies Meta<typeof AddNewDeck>

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
      <Modal open title={'Add New Card'}>
        <div className={s.inputBlock}>
          <Typography variant={'subtitle2'}>
            Enter your question and give the correct answer:
          </Typography>
          <TextField label={'Question?'} />
          <div className={s.notImg}>
            <img alt={'notImg'} src={notImg} />
          </div>
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change image</Button>
            <Icon className={s.imgOnButton} name={'img'} />
          </Typography>

          <TextField label={'Answer'} />
          <div className={s.notImg}>
            <img alt={'notImg'} src={notImg} />
          </div>
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change image</Button>
            <Icon className={s.imgOnButton} name={'img'} />
          </Typography>
        </div>

        <div className={s.buttonBlock}>
          <Typography variant={'subtitle2'}>
            <Button variant={'secondary'}>Cancel</Button>
          </Typography>
          <Typography variant={'subtitle2'}>
            <Button variant={'primary'}>Add new Card</Button>
          </Typography>
        </div>
      </Modal>
    )
  },
}
