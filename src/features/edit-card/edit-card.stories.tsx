import { useState } from 'react'

import { AddCardForm } from '@/components/forms/add-card-form'
import { Icon } from '@/components/icon/Icon'
import { IconButton } from '@/components/ui/icon-button'
import { Modal } from '@/components/ui/modal'
import { EditCard } from '@/features/edit-card/edit-card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: EditCard,
  parameters: {
    layout: 'centered',
  },
  title: 'Components/features/edit-card',
} satisfies Meta<typeof EditCard>

export default meta
type Story = StoryObj<typeof meta>

export const EditCardButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
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
      <>
        {open && (
          <Modal open setOpen={setOpen} title={'Editing a card'}>
            <AddCardForm onSubmit={() => {}} onValueChange={() => {}} options={options} />
          </Modal>
        )}
        <IconButton
          icon={<Icon height={'16px'} name={'edit'} width={'16px'} />}
          onClick={() => setOpen(true)}
        />
      </>
    )
  },
}

// export const EditCardTextModal: Story = {
//   render: () => {
//     const options = [
//       {
//         title: 'Text',
//         value: '1',
//       },
//       {
//         title: 'Picture',
//         value: '2',
//       },
//     ]
//
//     return (
//       <Modal open title={'Editing a card'}>
//         <AddCardForm onSubmit={() => {}} onValueChange={() => {}} options={options} />
//         <ButtonBlock primary={'Save changes'} secondary={'Cancel'} />
//       </Modal>
//     )
//   },
// }

// export const EditCardPictureModal: Story = {
//   render: () => {
//     const options = [
//       {
//         title: 'Text',
//         value: '1',
//       },
//       {
//         title: 'Picture',
//         value: '2',
//       },
//     ]
//
//     return (
//       <Modal open title={'Editing a card'}>
//         <div className={s.inputBlock}>
//           <Select label={'Choose a question format'} onValueChange={() => {}} options={options} />
//           <TextField label={'Question:'} />
//           <img alt={'notImg'} src={notImg} />
//           <Typography className={s.uploadButton} variant={'subtitle2'}>
//             <Button variant={'secondary'}>Change cover</Button>
//             <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
//           </Typography>
//
//           <TextField label={'Answer:'} />
//           <img alt={'notImg'} src={notImg} />
//           <Typography className={s.uploadButton} variant={'subtitle2'}>
//             <Button variant={'secondary'}>Change cover</Button>
//             <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
//           </Typography>
//           <ButtonFooter titleCancel={'Cancel'} titleConfirm={'Save changes'} />
//         </div>
//       </Modal>
//     )
//   },
// }
