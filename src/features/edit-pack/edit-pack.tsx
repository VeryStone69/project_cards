import { useState } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkBox'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './edit-pack.module.scss'

const EditPack = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <Modal open={open} setOpen={setOpen} title={'Edit Pack'}>
          <div className={s.inputBlock}>
            <div className={s.notImg}>
              <img alt={'notImg'} src={notImg} />
            </div>
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
      <IconButton
        icon={<Icon height={'16px'} name={'edit'} onClick={() => setOpen(true)} width={'16px'} />}
      />
    </>
  )
}

export default EditPack
