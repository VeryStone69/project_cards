import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/controlled-checkbox";
import {DevTool} from "@hookform/devtools";
import {clsx} from "clsx";
import s from './sign-in.module.scss'
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
    rememberMe: z.boolean().optional()
})

export type FormValues = z.infer<typeof loginSchema>
type LoginProps = {
    onSubmit: (values: FormValues) => void
    className?: string
}

export const SignIn = ({onSubmit, className}: LoginProps) => {

    const {handleSubmit, control} = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
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

                <ControlledCheckbox
                    control={control}
                    name={'rememberMe'}
                    label={'Remember me'}
                    className={s.checkbox}
                />

                <Button type="submit"
                        className={s.button}
                        fullWidth={true}
                >Sign in
                </Button>
            </form>
        </>
    )
}
