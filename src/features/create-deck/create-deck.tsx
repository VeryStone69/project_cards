import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'

export const CreateDeck = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal open={open} setOpen={setOpen} title={'Create new pack'}>
        <Button>
          <Typography variant={'subtitle2'}>Add New Pack</Typography>
        </Button>
      </Modal>
    </>
  )
}
