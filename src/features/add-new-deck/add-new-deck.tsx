import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { ButtonBlock } from '@/components/button-block/button-block'
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
        <Modal open={open} setOpen={setOpen} title={'Creating a new deck'}>
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
