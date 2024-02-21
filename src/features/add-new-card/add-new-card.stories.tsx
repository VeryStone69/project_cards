import { useState } from 'react'

import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { Meta, StoryObj } from '@storybook/react'

import s from './add-new-card.module.scss'

import notImg from '../../assets/images/not-img.jpg'

const meta = {
  args: {
    open: false,
    setOpen: () => {},
    title: 'test',
  },
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/add-new-card',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const AddCardModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [imgQestion, setImgQestion] = useState<File | null>(null)
    const [imgAnswer, setImgAnswer] = useState<File | null>(null)
    const imgQ = imgQestion ? URL.createObjectURL(imgQestion) : null
    const imgA = imgAnswer ? URL.createObjectURL(imgAnswer) : null

    return (
      <>
        {open && (
          <Modal open={open} setOpen={setOpen} title={'Adding a new card'}>
            <div className={s.inputBlock}>
              <Typography variant={'subtitle1'}>
                Enter your question and give the correct answer:
              </Typography>
              <TextField label={'Question:'} />
              <img
                alt={'notImg'}
                src={imgQ ?? notImg}
                style={{ objectFit: 'cover', width: '100%' }}
              />
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                {imgQ && (
                  <Button
                    fullWidth
                    onClick={() => setImgQestion(null)}
                    type={'reset'}
                    variant={'secondary'}
                  >
                    <Typography variant={'subtitle2'}>Delete Cover</Typography>
                    <Icon fill={'white'} name={'trashBin'} size={'18px'} />
                  </Button>
                )}

                <FileUploader
                  name={''}
                  onChange={e => {
                    setImgQestion(e.target.files?.[0] || null)
                    e.target.value = ''
                  }}
                  style={{ width: '100%' }}
                  variant={'secondary'}
                >
                  <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
                  <Typography variant={'subtitle2'}>Change Image</Typography>
                </FileUploader>
              </div>

              <TextField label={'Answer:'} />
              <img alt={'notImg'} src={imgA ?? notImg} />
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'space-between',
                }}
              >
                {imgA && (
                  <Button
                    fullWidth
                    onClick={() => setImgAnswer(null)}
                    type={'reset'}
                    variant={'secondary'}
                  >
                    <Typography variant={'subtitle2'}>Delete Cover</Typography>
                    <Icon fill={'white'} name={'trashBin'} size={'18px'} />
                  </Button>
                )}

                <FileUploader
                  name={''}
                  onChange={e => {
                    setImgAnswer(e.target.files?.[0] || null)
                    e.target.value = ''
                  }}
                  style={{ width: '100%' }}
                  variant={'secondary'}
                >
                  <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
                  <Typography variant={'subtitle2'}>Change Image</Typography>
                </FileUploader>
              </div>

              <ButtonFooter onClickCancel={() => setOpen(false)} option={2} />
            </div>
          </Modal>
        )}
        <Button onClick={() => setOpen(true)} variant={'secondary'}>
          Add Card
        </Button>
      </>
    )
  },
}
