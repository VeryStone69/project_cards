import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}

// test button is app
// <Typography variant={'subtitle2'}>
//   <Button variant={'primary'}>Primary Button</Button>
// </Typography>
//
// <Typography color={'--color-accent-500'} variant={'subtitle2'}>
//   <Button variant={'tertiary'}>Tertiary Button</Button>
// </Typography>
//
// <Typography variant={'subtitle2'}>
//   <Button variant={'primary'}>
//     <Icon name={'logout'} size={'16'} />
//     Primary Button
//   </Button>
// </Typography>
//
// <Button<'a'> href={'google.com'} rel={'noopener noreferrer'} target={'_blank'}>
//   Primary Button 2
// </Button>
//
// {/*<Header />*/}
