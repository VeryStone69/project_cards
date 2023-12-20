import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkBox/СheckBox'

export type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled, name, shouldUnregister })

  return <Checkbox {...rest} checked={value} disabled={disabled} onValueChange={onChange} />
}
