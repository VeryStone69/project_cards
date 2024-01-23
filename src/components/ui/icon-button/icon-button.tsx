import { ComponentPropsWithoutRef, ComponentRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './icon-button.module.scss'
export type IconButtonProps = {
  icon: ReactNode
  small?: boolean
} & Omit<ComponentPropsWithoutRef<'button'>, 'children'>

export const IconButton = forwardRef<ComponentRef<'button'>, IconButtonProps>(
  ({ className, icon, small, ...props }, ref) => {
    const classes = clsx(s.button, className)

    return (
      <button ref={ref} {...props} className={classes}>
        {icon}
      </button>
    )
  }
)
