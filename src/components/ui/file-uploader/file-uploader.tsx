import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/icon/Icon'
import { clsx } from 'clsx'

import s from './file-uploader.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const FileUploader = ({ className }: Props) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <div className={classNames.root}>
      <Icon className={s.editButton} fill={'white'} height={'15px'} name={'edit'} width={'15px'} />
    </div>
  )
}
