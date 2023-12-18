import {useController, useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {TextField} from '@/components/ui/textField'
import {Checkbox} from "@/components/ui/checkBox";

type FormValues = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = () => {

    const {register, handleSubmit, control, formState: {errors}} = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })

    const {field: {value, onChange},} = useController({name: 'rememberMe', control, defaultValue: false,})

    console.log(errors)

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('email', {
                    pattern: {value: emailRegex, message: 'Введите действующий адрес электронной почты'},
                    required: 'Поле логина не может быть пустым'
                })}
                label={'Email'}
                errorMessage={errors.email?.message}
            />

            <TextField
                {...register('password', {
                    minLength: {value: 3, message: 'Пароль должен быть не менее 3 символов'},
                    maxLength: {value: 30, message: 'Пароль должен быть не более 30 символов'},
                    required: 'Поле пароля не может быть пустым'
                })}
                label={'Password'}
                type={'password'}
                errorMessage={errors.password?.message}
            />

            <Checkbox
                checked={value}
                label={'Remember'}
                onValueChange={onChange}
            />

            <Button type="submit">Submit</Button>
        </form>
    )
}