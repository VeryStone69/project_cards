import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {clsx} from "clsx";
import s from './forgot-password.module.scss'
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field/controlled-text-field";
import {Typography} from "@/components/ui/typography";

const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const forgotPasswordSchema = z.object({
    email: z.string()
        .trim()
        .email('Введите действующий адрес электронной почты')
        .regex(emailRegex)
})

export type FormValues = z.infer<typeof forgotPasswordSchema>
type LoginProps = {
    onSubmit: (values: FormValues) => void
    className?: string
}

export const ForgotPassword = ({onSubmit, className}: LoginProps) => {

    const {handleSubmit, control} = useForm<FormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        }
    })

    const classNames = clsx(s.form, className)

    return (<>

            <form onSubmit={handleSubmit(onSubmit)} className={classNames}>

                <ControlledTextField
                    control={control}
                    name={'email'}
                    label={'Email'}
                />
                <Typography variant={'body2'} className={s.content}>
                    Enter your email address and we'll send you to hell
                </Typography>

                <Button type="submit"
                        fullWidth={true}
                >Send
                </Button>
            </form>
        </>
    )
}
