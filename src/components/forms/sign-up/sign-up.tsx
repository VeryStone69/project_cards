import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {DevTool} from "@hookform/devtools";
import {clsx} from "clsx";
import s from './sign-up.module.scss'
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field/controlled-text-field";

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
    rememberMe: z.boolean().optional(),
    confirmPassword: z.string()
        .min(3, 'Пароль должен быть не менее 3 символов')
        .max(30, 'Пароль должен быть не более 30 символов'),
})

export type FormValues = z.infer<typeof loginSchema>
type LoginProps = {
    onSubmit: (values: FormValues) => void
    className?: string
}

export const SignUp = ({onSubmit, className}: LoginProps) => {

    const {handleSubmit, control} = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            confirmPassword: ''
        }
    })

    const classNames = clsx(s.form, className)

    return (<>
            <DevTool control={control}/>

            <form onSubmit={handleSubmit(onSubmit)} className={classNames}>

                <ControlledTextField
                    control={control}
                    name={'email'}
                    label={'Email'}
                    className={s.email}
                />

                <ControlledTextField
                    control={control}
                    label={'Password'}
                    type={'password'}
                    className={s.password}
                    name={'password'}/>

                <ControlledTextField
                    control={control}
                    name={'confirmPassword'}
                    label={'Confirm password'}
                    type={'password'}
                    className={s.conformPassword}
                />

                <Button type="submit"
                        className={s.button}
                        fullWidth={true}
                >Sign up
                </Button>
            </form>
        </>
    )
}
