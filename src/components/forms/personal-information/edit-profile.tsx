import {useForm} from 'react-hook-form'

import {ControlledTextField} from '@/components/ui/controlled/controlled-text-field/controlled-text-field'
import {zodResolver} from '@hookform/resolvers/zod'
import {clsx} from 'clsx'
import {z} from 'zod'

import s from './edit-profile.module.scss'

import {Button} from '../../ui/button'

const editProfileSchema = z.object({
    text: z.string()
        .trim()
        .max(30, {message: 'Имя должно быть не больше 30 символов'})
        .min(7, {message: 'Имя должно быть не меньше 7 символов'})
})

export type FormValues = z.infer<typeof editProfileSchema>
type LoginProps = {
    className?: string
    onSubmit: (values: FormValues) => void
}

export const EditProfile = ({className, onSubmit}: LoginProps) => {
    const {control, handleSubmit} = useForm<FormValues>({
        defaultValues: {
            text: '',
        },
        resolver: zodResolver(editProfileSchema),
    })

    const classNames = clsx(s.form, className)

    return (
        <>
            <form className={classNames} onSubmit={handleSubmit(onSubmit)}>
                <ControlledTextField
                    control={control}
                    label={'Nickname'}
                    name={'text'}
                    type={'text'}
                    className={s.textField}
                />

                <Button fullWidth type={'submit'}>
                    Save changes
                </Button>
            </form>
        </>
    )
}
