import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup
      error={error?.message}
      name={name}
      onValueChange={onChange}
      value={value}
      {...rest}
    />
  )
}
