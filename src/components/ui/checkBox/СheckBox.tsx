import { Icon } from '@/components/icon/icon'
import { Typography } from '@/components/ui/typography'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
}
export const Checkbox = ({ checked, className, disabled, id, label, onChange }: CheckboxProps) => {
  const classes = (disabled && s.checkboxIndicatorDisabled) || s.checkboxIndicator
  const styleUnchecked = (disabled && s.frameDisabled) || s.frame

  return (
    <Typography as={'label'} className={className ? className : s.label}>
      <RadixCheckbox.Root
        checked={checked}
        className={s.checkboxRoot}
        disabled={disabled}
        id={id}
        onCheckedChange={onChange}
      >
        <div className={styleUnchecked}></div>
        <RadixCheckbox.Indicator className={classes}>
          {checked && <Icon name={'checked'} />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label}
    </Typography>
  )
}
