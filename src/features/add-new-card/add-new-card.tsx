import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './add-new-card.module.scss'

const AddNewCard = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Add New Card'}>
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
      )}

      <Typography variant={'subtitle2'}>
        <Button onClick={() => setOpen(!open)} variant={'primary'}>
          Add New Card
        </Button>
      </Typography>
    </>
  )
}

export default AddNewCard
