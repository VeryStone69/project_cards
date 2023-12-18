import { ComponentPropsWithoutRef } from 'react'

import icon from '@/assets/icons/icons.svg'

type IconProps = {
  name: string
  size?: string
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ name, size = '24px', ...rest }: IconProps) => {
  return (
    <svg height={size} width={size} {...rest}>
      <use href={`${icon}#${name}`} />
    </svg>
  )
}
