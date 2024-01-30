import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './add-new-deck.module.scss'

const AddNewDeck = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Create new deck'}>
          <div className={s.inputBlock}>
            <img alt={'notImg'} src={notImg} />
            <Typography className={s.uploadButton} variant={'subtitle2'}>
              <Button variant={'secondary'}>Change cover</Button>
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 20 20'} />
            </Typography>
            <TextField label={'Pack name'} />

            <Typography variant={'body2'}>
              <Checkbox label={'Private pack'} />
            </Typography>
          </div>

          <div className={s.buttonBlock}>
            <Typography variant={'subtitle2'}>
              <Button variant={'secondary'}>Cancel</Button>
            </Typography>
            <Typography variant={'subtitle2'}>
              <Button variant={'primary'}>Send</Button>
            </Typography>
          </div>
        </Modal>
      )}

      <Typography variant={'subtitle2'}>
        <Button onClick={() => setOpen(!open)} variant={'primary'}>
          Add New Deck
        </Button>
      </Typography>
    </div>
  )
}

export default AddNewDeck
