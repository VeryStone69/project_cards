import { memo } from 'react'

import { Icon } from '@/components/icon/Icon'

import s from './rating.module.scss'

type Props = {
  className?: string
  rating?: number
  size?: string
}
export const Rating = memo(({ className, rating = 0, size = '16px' }: Props) => {
  const starItem = [1, 2, 3, 4, 5]

  return (
    <div className={className}>
      {starItem.map(star => (
        <Icon
          className={rating >= star ? s.starRate : s.starNoRate}
          key={star}
          name={'star'}
          size={size}
        />
      ))}
    </div>
  )
})
