import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {TextField, TextFieldProps} from "@/components/ui/textField";

export type ControlledTextFieldProps<T extends FieldValues> =
    Omit<UseControllerProps<T>, 'rules' | 'defaultValue' | 'disabled'>
    & Omit<TextFieldProps, 'onChange' | 'value'>
export const ControlledTextField = <T extends FieldValues>({control, name, ...rest}: ControlledTextFieldProps<T>) => {

    const {field, fieldState: {error}} = useController({name, control})

    return (
        <TextField
            errorMessage={error?.message}
            {...field}
            {...rest}
        />
    )
}