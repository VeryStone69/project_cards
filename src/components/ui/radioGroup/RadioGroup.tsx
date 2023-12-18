import { Typography } from '@/components/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioGroupProps = {
  className?: string
  disabled?: boolean
  onValueChange?: (value: string) => void
  value?: string
}
export const RadioGroup = ({
  className,
  disabled = true,
  onValueChange,
  value,
}: RadioGroupProps) => {
  const classes = (disabled && s.checkboxIndicatorDisabled) || s.checkboxIndicator
  const styles = disabled ? '' : s.styleUnchecked

  return (
    <RadioGroupRadix.Root
      className={className ? className : s.root}
      disabled={disabled}
      onValueChange={onValueChange}
      value={value}
    >
      <Typography as={'label'} className={s.typography} variant={'body2'}>
        <RadioGroupRadix.Item className={s.item} value={'1'}>
          <RadioGroupRadix.Indicator className={s.indicator} />
          <div className={styles}></div>
        </RadioGroupRadix.Item>
        text
      </Typography>
      <Typography as={'label'} className={s.typography}>
        <RadioGroupRadix.Item className={s.item} value={'3'}>
          <RadioGroupRadix.Indicator className={s.indicator} />
          <div className={s.styleUnchecked}></div>
        </RadioGroupRadix.Item>
        text2
      </Typography>
    </RadioGroupRadix.Root>
  )
}
