import { CSSProperties, useState } from 'react'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Meta } from '@storybook/react'

import { Modal } from './modal'

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ui/Modal',
} satisfies Meta<typeof Modal>

export default meta

export const EditPackModal = {
  render() {
    const [open, setOpen] = useState(false)

    const container: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '12px',
    }

    const buttonContainer: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '12px',
    }

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit pack</Button>
        <Modal open={open} setOpen={setOpen} title={'Edit pack'}>
          <div style={container}>
            <TextField label={'Pack name'} />
          </div>
          <div style={buttonContainer}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button variant={'primary'}>Save Changes</Button>
          </div>
        </Modal>
      </>
    )
  },
}
