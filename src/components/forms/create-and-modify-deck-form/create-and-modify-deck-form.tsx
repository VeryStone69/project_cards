import { ComponentPropsWithoutRef, ElementType } from 'react'
import { SubmitHandler } from 'react-hook-form'

import notImg from '@/assets/images/not-img.jpg'
import { useAddDeckForm } from '@/components/forms/create-and-modify-deck-form/hook/useAddDeckForm'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledFileUploader } from '@/components/ui/controlled/controlled-file-uploader/controlled-file-uploader'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { PackFormType } from '@/utils/zod-resolvers/file-update-resolver'
import { clsx } from 'clsx'

import s from './create-and-modify-deck-form.module.scss'

export type DefaultValueType = {
  cover: null | string
  isPrivate: boolean
  name: string
}

type Props<C extends ElementType = 'div'> = {
  defaultValue?: DefaultValueType
  onCancel: () => void
  onSubmit: (data: FormData) => void
} & Omit<ComponentPropsWithoutRef<C>, 'defaultValue' | 'onSubmit'>

export const CreateAndModifyDeckForm = ({
  className,
  defaultValue,
  onCancel,
  onSubmit,
  ...rest
}: Props) => {
  const classNames = clsx(s.formCard, className)
  const { control, deleteCover, handleSubmit, img, open, setOpen, toastError } =
    useAddDeckForm(defaultValue)
  const imgClasses = clsx(s.image, img && s.hover, open && s.open)
  const onClickHandler = () => {
    if (img) {
      setOpen(prevState => !prevState)
    }
  }
  const onSubmitHandler: SubmitHandler<PackFormType> = async data => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)
    if (data.cover === null && img === null) {
      form.append('cover', '')
    } else if (data.cover) {
      form.append('cover', data.cover || '')
    }
    onSubmit(form)
  }

  return (
    <div className={classNames} {...rest}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.inputBlock}>
          <img alt={'notImg'} className={imgClasses} onClick={onClickHandler} src={img || notImg} />
          <div className={s.deleteCover}>
            <ControlledFileUploader
              control={control}
              errorToast={toastError}
              fullWidth
              name={'cover'}
              type={'button'}
              variant={'secondary'}
            >
              <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
              <Typography variant={'subtitle2'}>Upload image</Typography>
            </ControlledFileUploader>
            {img && (
              <Button
                className={s.deleteImage}
                fullWidth
                onClick={deleteCover}
                type={'reset'}
                variant={'secondary'}
              >
                <Typography variant={'subtitle2'}>Delete image</Typography>
                <Icon fill={'white'} name={'trashBin'} size={'18px'} />
              </Button>
            )}
          </div>
          <ControlledTextField control={control} label={'Deck name'} name={'name'} />

          <Typography variant={'body2'}>
            <ControlledCheckbox control={control} label={'Private deck'} name={'isPrivate'} />
          </Typography>
        </div>
        <ButtonFooter
          onClickCancel={onCancel}
          option={2}
          titleConfirm={defaultValue ? 'Update' : 'Create'}
        />
      </form>
    </div>
  )
}
