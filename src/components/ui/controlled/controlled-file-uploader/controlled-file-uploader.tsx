import { ChangeEvent } from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { ButtonProps } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'

type ControlledFileUploaderType<T extends FieldValues> = {
  control: Control<T>
  errorToast?: () => void
  name: FieldPath<T>
} & Omit<ButtonProps, 'onChange' | 'onClick'>
export const ControlledFileUploader = <T extends FieldValues>({
  control,
  errorToast,
  name,
  ...rest
}: ControlledFileUploaderType<T>) => {
  const {
    field: { onChange },
  } = useController({ control, name })

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files?.[0])

    errorToast?.()
    e.target.value = ''
  }

  return <FileUploader {...rest} name={name} onChange={changeHandler} />
}
