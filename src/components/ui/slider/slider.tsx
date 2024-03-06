import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

type SliderProps = {
  className?: string
  disabled: boolean
  label?: string
  max?: number
  min?: number
  onChange?: (value: number[]) => void
  step?: number
  value: number[]
}

export const Slider = ({
  className,
  disabled,
  label,
  max,
  min,
  onChange,
  step = 1,
  value,
}: SliderProps) => {
  const thumb = clsx(disabled && s.thumbDisabled, !disabled && s.thumb)
  const range = clsx(disabled && s.rangeDisabled, !disabled && s.range)
  const labelStyle = clsx(s.label, className)

  return (
    <Typography as={'label'} className={labelStyle} variant={'body2'}>
      {label}

      <div className={s.body}>
        <div>
          <Typography as={'h3'} className={s.value} variant={'body1'}>
            {value[0]}
          </Typography>
        </div>

        <SliderRadix.Root
          className={s.line}
          disabled={disabled}
          max={max}
          min={min}
          onValueChange={onChange}
          step={step}
          value={value}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={range} />
          </SliderRadix.Track>

          <SliderRadix.Thumb aria-label={'Volume'} className={thumb}>
            <div className={s.dot}></div>
          </SliderRadix.Thumb>

          <SliderRadix.Thumb aria-label={'Volume'} className={thumb}>
            <div className={s.dot}></div>
          </SliderRadix.Thumb>
        </SliderRadix.Root>

        <div>
          <Typography as={'h3'} className={s.value} variant={'body1'}>
            {value[1]}
          </Typography>
        </div>
      </div>
    </Typography>
  )
}
