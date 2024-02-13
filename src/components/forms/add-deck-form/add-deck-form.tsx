import { ComponentPropsWithoutRef, ElementType } from 'react'

import notImg from '@/assets/images/not-img.jpg'
import { useAddDeckForm } from '@/components/forms/add-deck-form/hook/useAddDeckForm'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledFileUploader } from '@/components/ui/controlled/controlled-file-uploader/controlled-file-uploader'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { PackFormType } from '@/utils/zod-resolvers/file-update-resolver'
import { clsx } from 'clsx'

import s from './add-deck-form.module.scss'

type Props<C extends ElementType = 'div'> = {
  onCancel: () => void
  onSubmit: (data: PackFormType) => void
} & Omit<ComponentPropsWithoutRef<C>, 'onSubmit'>
export const AddDeckForm = ({ className, onCancel, onSubmit, ...rest }: Props) => {
  const classNames = clsx(s.formCard, className)
  const { control, deleteCover, handleSubmit, img, open, setOpen, toastError } = useAddDeckForm()
  const imgClasses = clsx(s.image, img && s.hover, open && s.open)
  const onClickHandler = () => {
    if (img) {
      setOpen(prevState => !prevState)
    }
  }

  return (
    <div className={classNames} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <img alt={'notImg'} className={imgClasses} onClick={onClickHandler} src={img || notImg} />
          <div className={s.deleteCover}>
            {img && (
              <Button fullWidth onClick={deleteCover} type={'reset'} variant={'secondary'}>
                <Typography variant={'subtitle2'}>Delete Cover</Typography>
                <Icon fill={'white'} name={'trashBin'} size={'18px'} />
              </Button>
            )}
            <ControlledFileUploader
              control={control}
              errorToast={toastError}
              fullWidth
              name={'cover'}
              type={'button'}
              variant={'secondary'}
            >
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
              <Typography variant={'subtitle2'}>Upload Image</Typography>
            </ControlledFileUploader>
          </div>
          <ControlledTextField control={control} label={'Deck name'} name={'name'} />

          <Typography variant={'body2'}>
            <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
          </Typography>
        </div>
        <ButtonFooter onClickCancel={onCancel} option={2} titleConfirm={'Create a deck'} />
      </form>
    </div>
  )
}
