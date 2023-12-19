import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {TextField} from '@/components/ui/textField'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox";

const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const loginSchema = z.object({
    email: z.string()
        .trim()
        .email('Введите действующий адрес электронной почты')
        .regex(emailRegex),
    password: z.string()
        .min(3, 'Пароль должен быть не менее 3 символов')
        .max(30, 'Пароль должен быть не более 30 символов'),
    rememberMe: z.boolean().optional()
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {

    const {register, handleSubmit, control, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })

    console.log(errors)

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('email')}
                label={'Email'}
                errorMessage={errors.email?.message}
            />

            <TextField
                {...register('password')}
                label={'Password'}
                type={'password'}
                errorMessage={errors.password?.message}
            />

            <ControlledCheckbox
                control={control}
                name={'rememberMe'}
                label={'Remember me'}/>

            <Button type="submit">Submit</Button>
        </form>
    )
}
