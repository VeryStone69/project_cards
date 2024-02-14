import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { ButtonBlock } from '@/components/button-block/button-block'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './add-new-card.module.scss'

export const AddNewCard = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Adding a new card'}>
          <div className={s.inputBlock}>
            <Typography variant={'subtitle2'}>
              Enter your question and give the correct answer:
            </Typography>
            <TextField label={'Question:'} />
            <img alt={'notImg'} src={notImg} />
            <FileUploader name={''} onChange={() => {}} variant={'secondary'}>
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
              <Typography variant={'subtitle2'}>Upload Image</Typography>
            </FileUploader>

            <TextField label={'Answer:'} />
            <img alt={'notImg'} src={notImg} />
            <Button fullWidth variant={'secondary'}>
              <Typography variant={'subtitle2'}>Change image</Typography>
              <Icon name={'img'} viewBox={'0 0 18 18'} />
            </Button>
          </div>

          <ButtonBlock primary={'Add a card'} secondary={'Cancel'} />
        </Modal>
      )}
      <Button onClick={() => setOpen(!open)} variant={'primary'}>
        <Typography variant={'subtitle2'}>Add New Card</Typography>
      </Button>
    </>
  )
}
