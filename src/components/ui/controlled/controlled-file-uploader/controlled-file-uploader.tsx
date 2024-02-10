import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { ButtonProps } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'

type AsProp<T extends ElementType> = {
  as?: T
}
type PolymorphicComponentProp<T extends ElementType, Props = {}> = Omit<
  ComponentPropsWithoutRef<T>,
  PropsToOmit<T, Props>
>

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P)

type ControlledFileUploaderType<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & ButtonProps
export const ControlledFileUploader = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledFileUploaderType<T>) => {
  const { field } = useController({ control, name })

  return <FileUploader {...rest} {...field} />
}
