import {FieldValues, useController, UseControllerProps} from 'react-hook-form'

import {Checkbox, CheckboxProps} from '@/components/ui/checkBox/СheckBox'

export type ControlledCheckboxProps<T extends FieldValues> =
    Omit<UseControllerProps<T>, 'rules' | 'defaultValue' | 'disabled'>
    & Omit<CheckboxProps, 'onValueChange' | 'checked'>

export const ControlledCheckbox = <T extends FieldValues>({
                                                              name,
                                                              control,
                                                              shouldUnregister,
                                                              disabled,
                                                              ...rest
                                                          }: ControlledCheckboxProps<T>) => {

    const {field: {onChange, value},} = useController({name, control, shouldUnregister, disabled})

    return (
        <Checkbox  {...rest} checked={value} onValueChange={onChange} disabled={disabled}/>
    )
}