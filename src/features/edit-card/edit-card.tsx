import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { ButtonBlock } from '@/components/button-block/button-block'
import { AddCardForm } from '@/components/forms/add-card-form'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from '@/features/edit-card/edit-card.module.scss'

export const EditCard = () => {
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState('1')
  const options = [
    {
      title: 'Text',
      value: '1',
    },
    {
      title: 'Picture',
      value: '2',
    },
  ]

  return (
    <div>
      {option === '1' && (
        <Modal open={open} setOpen={setOpen} title={'Editing a card'}>
          <AddCardForm onSubmit={() => {}} onValueChange={setOption} options={options} />
          <ButtonBlock className={s.buttonBlock} primary={'Save changes'} secondary={'Cancel'} />
        </Modal>
      )}

      {option === '2' && (
        <Modal open={open} setOpen={setOpen} title={'Editing a card'}>
          <div className={s.inputBlock}>
            <Select
              label={'Choose a question format'}
              onValueChange={setOption}
              options={options}
            />
            <TextField label={'Question:'} />
            <img alt={'notImg'} src={notImg} />
            <Typography className={s.uploadButton} variant={'subtitle2'}>
              <Button variant={'secondary'}>Change cover</Button>
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
            </Typography>

            <TextField label={'Answer:'} />
            <img alt={'notImg'} src={notImg} />
            <Typography className={s.uploadButton} variant={'subtitle2'}>
              <Button variant={'secondary'}>Change cover</Button>
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
            </Typography>
          </div>
          <ButtonBlock primary={'Save changes'} secondary={'Cancel'} />
        </Modal>
      )}

      <IconButton
        icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
      />
    </div>
  )
}
