import { ComponentPropsWithoutRef, ElementType } from 'react'
import { useForm } from 'react-hook-form'

import notImg from '@/assets/images/not-img.jpg'
import { Icon } from '@/components/icon/Icon'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledFileUploader } from '@/components/ui/controlled/controlled-file-uploader/controlled-file-uploader'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { ButtonFooter } from '@/features/button-footer'
import { PackFormType, addNewDeckSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import s from './add-deck-form.module.scss'

type Props<C extends ElementType = 'div'> = {
  onCancel: () => void
  onSubmit: (data: PackFormType) => void
} & Omit<ComponentPropsWithoutRef<C>, 'onSubmit'>
export const AddDeckForm = ({ className, onCancel, onSubmit, ...rest }: Props) => {
  const classNames = clsx(s.formCard, className)

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      cover: null,
      isPrivate: false,
      name: '',
    },
    mode: 'onChange',
    resolver: zodResolver(addNewDeckSchema),
  })

  const file = watch('cover')
  const src = file && !errors.cover ? URL.createObjectURL(file) : null

  return (
    <div className={classNames} {...rest}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <img alt={'notImg'} src={src ?? notImg} />
          <Typography style={{ color: 'red' }} variant={'subtitle1'}>
            {errors.cover?.message}
          </Typography>
          <ControlledFileUploader
            control={control}
            name={'cover'}
            type={'button'}
            variant={'secondary'}
          >
            <Icon className={s.imgOnButton} name={'img'} viewBox={'0 0 18 18'} />
            <Typography variant={'subtitle2'}>Upload Image</Typography>
          </ControlledFileUploader>

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
