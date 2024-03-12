import { Icon } from '@/components/icon/Icon'
import { Typography } from '@/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

export type Option = {
  title: string
  value: string
}
type SelectProps = {
  className?: string
  disabled?: boolean
  label?: string
  onValueChange: (value: string) => void
  options: Option[]
  placeholder?: string
  sizeSelect?: 'small'
  value?: string
}
export const Select = ({
  className,
  disabled,
  label,
  onValueChange,
  options,
  placeholder,
  sizeSelect,
  value,
}: SelectProps) => {
  const selectSize =
    sizeSelect === 'small' ? s.SelectTriggerSmall + ' ' + className : s.SelectTrigger
  const selectItemSize = sizeSelect === 'small' ? s.SelectItemSmall : s.SelectItem
  const typographyTextSize = sizeSelect === 'small' ? s.typographyTextSmall : s.typographyText
  const typographyStyle = (disabled && s.typographyLabelDisabled) || ''

  return (
    <>
      <Typography as={'div'} className={typographyStyle} variant={'body2'}>
        {label}
        <RadixSelect.Root disabled={disabled} onValueChange={onValueChange} value={value}>
          <RadixSelect.Trigger className={selectSize}>
            <RadixSelect.Value placeholder={placeholder} />
            <Icon className={s.icon} name={'arrowDown'} />
          </RadixSelect.Trigger>
          <RadixSelect.Content avoidCollisions className={s.SelectContent} position={'popper'}>
            <RadixSelect.Viewport className={s.SelectViewport}>
              {options.map(item => {
                return (
                  <RadixSelect.Item className={selectItemSize} key={item.value} value={item.value}>
                    <Typography as={'label'} className={typographyTextSize} variant={'body1'}>
                      <RadixSelect.ItemText>{item.title}</RadixSelect.ItemText>
                    </Typography>
                  </RadixSelect.Item>
                )
              })}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Root>
      </Typography>
    </>
  )
}
