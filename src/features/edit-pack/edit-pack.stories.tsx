import ButtonBlock from '@/components/button-block/button-block'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { EditPack } from '@/features/edit-pack/edit-pack'
import { Meta, StoryObj } from '@storybook/react'

import s from '@/features/add-new-deck/add-new-deck.module.scss'

import notImg from '../../assets/images/not-img.jpg'

const meta = {
  component: EditPack,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/edit-pack',
} satisfies Meta<typeof EditPack>

export default meta
type Story = StoryObj<typeof meta>

export const EditPackButton: Story = {
  render: () => {
    return <IconButton icon={<Icon height={'16px'} name={'edit'} width={'16px'} />} />
  },
}

export const EditPackModal: Story = {
  render: () => {
    return (
      <Modal open title={'Editing a Pack'}>
        <div className={s.inputBlock}>
          <div className={s.notImg}>
            <img alt={'notImg'} src={notImg} />
          </div>
          <Typography className={s.uploadButton} variant={'subtitle2'}>
            <Button variant={'secondary'}>Change cover</Button>
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
          </Typography>
          <TextField label={'Pack name'} />

          <Typography variant={'body2'}>
            <Checkbox label={'Private pack'} />
          </Typography>
        </div>

        <ButtonBlock className={s.buttonBlock} primary={'Save changes'} secondary={'Cancel'} />
      </Modal>
    )
  },
}
