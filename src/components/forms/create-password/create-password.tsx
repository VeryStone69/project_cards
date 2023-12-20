import {useForm} from 'react-hook-form'

import {Button} from '../../ui/button'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {clsx} from "clsx";
import s from './create-password.module.scss'
import {ControlledTextField} from "@/components/ui/controlled/controlled-text-field/controlled-text-field";
import {Typography} from "@/components/ui/typography";

const forgotPasswordSchema = z.object({
    password: z.string()
        .min(3, 'Пароль должен быть не менее 3 символов')
        .max(30, 'Пароль должен быть не более 30 символов'),
})

export type FormValues = z.infer<typeof forgotPasswordSchema>
type LoginProps = {
    onSubmit: (values: FormValues) => void
    className?: string
}

export const CreatePassword = ({onSubmit, className}: LoginProps) => {

    const {handleSubmit, control} = useForm<FormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            password: '',
        }
    })

    const classNames = clsx(s.form, className)

    return (<>

            <form onSubmit={handleSubmit(onSubmit)} className={classNames}>

                <ControlledTextField
                    control={control}
                    name={'password'}
                    label={'New password'}
                />
                <Typography variant={'body2'} className={s.content}>
                    Create new password and we will send you further instructions to email
                </Typography>

                <Button type="submit"
                        fullWidth={true}
                >Create new password
                </Button>
            </form>
        </>
    )
}
