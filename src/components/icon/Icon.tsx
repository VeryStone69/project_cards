import { ComponentPropsWithoutRef } from 'react'

import icon from '@/assets/icons/icons.svg'

type IconProps = {
  name: string
  size?: string
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ name, size = '24px' }: IconProps) => {
  return (
    <svg height={size} width={size}>
      <use href={`${icon}#${name}`} />
    </svg>
  )
}
