import { useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './add-new-card.module.scss'

const AddNewCard = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Add New Deck'}>
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
      )}

      <Typography variant={'subtitle2'}>
        <Button onClick={() => setOpen(!open)} variant={'primary'}>
          Add New Card
        </Button>
      </Typography>
    </div>
  )
}

export default AddNewCard
