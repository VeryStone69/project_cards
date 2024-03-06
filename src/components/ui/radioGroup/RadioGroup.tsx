import { Typography } from '@/components/ui/typography'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type Option = {
  label: string
  value: string
}
export type RadioGroupProps = {
  className?: string
  disabled?: boolean
  error?: string
  name?: string
  onValueChange?: (value: string) => void
  options: Option[]
  value?: string
}
export const RadioGroup = ({
  className,
  disabled,
  error,
  onValueChange,
  options,
  value,
}: RadioGroupProps) => {
  const stylesRadioGroup = disabled ? '' : s.styleUnchecked
  const styleTypography = disabled ? s.typographyDisabled : s.typography

  return (
    <RadioGroupRadix.Root
      className={className ? className : s.root}
      disabled={disabled}
      onValueChange={onValueChange}
      value={value}
    >
      {options.map(radioButton => {
        return (
          <Typography
            as={'label'}
            className={styleTypography}
            key={radioButton.value}
            variant={'body2'}
          >
            <RadioGroupRadix.Item className={s.item} value={radioButton.value}>
              <RadioGroupRadix.Indicator className={s.indicator} />
              <div className={stylesRadioGroup}></div>
            </RadioGroupRadix.Item>
            {radioButton.label}
          </Typography>
        )
      })}
      {error && (
        <Typography className={s.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </RadioGroupRadix.Root>
  )
}
