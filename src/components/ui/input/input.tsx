import {ComponentPropsWithoutRef, ElementType} from 'react'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
    as?: T
    disabled?: boolean
    error?: boolean
    errorTitle?: string
    label?: string
    placeholder?: string
    variant?: 'inputWithIcon' | 'primaryInput' | 'searchInput'
} & ComponentPropsWithoutRef<T>

export const Input = <T extends ElementType = 'input'>(
    props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
    const {
        as: Component = 'input',
        disabled = false,
        error = false,
        errorTitle,
        label,
        placeholder,
        variant = 'primaryInput',
        ...rest
    } = props

    const inputError = error ? 'inputError' : ''
    const inputDisabled = disabled ? 'inputDisabled' : ''

    return (
        <div className={s.inputBlock}>
            <div className={s.inputBlockTitle}>{label}</div>
            <Component
                {...rest}
                className={`${s.inputDefault} ${s[variant]} ${s[inputError]} ${s[inputDisabled]}`}
                disabled={disabled}
                placeholder={placeholder}
            />
            {error && <div className={s.errorInputTitle}>{errorTitle}</div>}
        </div>
    )
}
