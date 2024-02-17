import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import { Typography } from '@/components/ui/typography'
import { editProfileSchema } from '@/utils/zod-resolvers/file-update-resolver'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './edit-profile.module.scss'

import { Button } from '../../ui/button'

export type FormValues = z.infer<typeof editProfileSchema>
type LoginProps = {
  className?: string
  name: string | undefined
  onSubmit: (values: FormValues) => void
}

export const EditProfile = ({ className, name, onSubmit }: LoginProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name,
    },
    resolver: zodResolver(editProfileSchema),
  })

  const classNames = clsx(s.form, className)

  return (
    <>
      <form className={classNames} onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <ControlledTextField
          className={s.textField}
          control={control}
          label={'Nickname'}
          name={'name'}
        />
        <Button fullWidth type={'submit'} variant={'primary'}>
          <Typography variant={'subtitle2'}>Save Changes</Typography>
        </Button>
      </form>
    </>
  )
}
