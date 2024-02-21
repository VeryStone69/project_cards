import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from '@/components/button-block/button-block.module.scss'

type Props = {
  className?: string
  primary: string
  secondary: string
}

export const ButtonBlock = ({ className, primary, secondary }: Props) => {
  const classNames = {
    root: clsx(s.buttonBlock, className),
  }

  return (
    <div className={classNames.root}>
      <Typography variant={'subtitle2'}>
        <Button variant={'secondary'}>{secondary}</Button>
      </Typography>
      <Typography variant={'subtitle2'}>
        <Button variant={'primary'}>{primary}</Button>
      </Typography>
    </div>
  )
}
