import { ComponentPropsWithoutRef, ElementType } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { EditProfile } from '@/components/forms/personal-information'
import { Icon } from '@/components/icon/Icon'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'
import { useLogOutMutation, useUpdateProfileMutation } from '@/services/auth-api/auth'

import s from './profile-name-update.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  email: string | undefined
  isEdit: boolean
  name: string | undefined
  setEdit: (value: boolean) => void
} & Omit<ComponentPropsWithoutRef<T>, 'name'>
export const ProfileNameUpdate = <T extends ElementType = 'div'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props>
) => {
  const { as, email, isEdit, name, setEdit, ...rest } = props
  const Component = as || 'div'
  const [logOut] = useLogOutMutation()
  const [updateProfile] = useUpdateProfileMutation()
  const onLogOut = () => {
    logOut()
  }
  const { t } = useTranslation()

  const onSubmitHandler: SubmitHandler<{ name: string }> = async data => {
    const form = new FormData()

    form.append('name', data.name)

    try {
      setEdit(false)
      await toast.promise(updateProfile(form).unwrap(), {
        pending: t('profile.toast.pending'),
        success: t('profile.toast.success'),
      })
    } catch (err) {
      toast.error(t('profile.toast.error'))
    }
  }

  return (
    <>
      {!isEdit ? (
        <>
          <Component {...rest} className={s.nameBlock}>
            <Typography variant={'h2'}>{name}</Typography>
            <IconButton icon={<Icon name={'edit'} size={'17px'} />} onClick={() => setEdit(true)} />
          </Component>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>
          <Button onClick={onLogOut} variant={'secondary'}>
            <Icon fill={'white'} name={'logout'} size={'16px'} />
            <Typography variant={'subtitle2'}>{t('profile.logout')}</Typography>
          </Button>
        </>
      ) : (
        <EditProfile name={name} onSubmit={onSubmitHandler} />
      )}
    </>
  )
}
