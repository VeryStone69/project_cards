import ButtonBlock from '@/components/button-block/button-block'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/features/add-new-card/add-new-card'
import { Meta, StoryObj } from '@storybook/react'

import s from './add-new-card.module.scss'

import notImg from '../../assets/images/not-img.jpg'

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
      <Modal open title={'Adding a new card'}>
        <div className={s.inputBlock}>
          <Typography variant={'subtitle2'}>
            Enter your question and give the correct answer:
          </Typography>
          <TextField label={'Question:'} />
          <img alt={'notImg'} src={notImg} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change image</Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>

          <TextField label={'Answer:'} />
          <img alt={'notImg'} src={notImg} />
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change image</Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>
        </div>

        <ButtonBlock primary={'Add a card'} secondary={'Cancel'} />
      </Modal>
    )
  },
}
