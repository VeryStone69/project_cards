import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

type SliderProps = {
  label?: string
  max?: number
  min?: number
  onChange?: (value: number[]) => void
  step?: number
  value: number[]
}

export const Slider = ({ label, max, min, onChange, step = 1, value }: SliderProps) => {
  return (
    <Typography as={'label'} className={s.label} variant={'body2'}>
      {label}

      <div className={s.body}>
        <Typography as={'h3'} className={s.value} variant={'body1'}>
          {value[0]}
        </Typography>

        <SliderRadix.Root
          className={s.line}
          max={max}
          min={min}
          onValueChange={onChange}
          step={step}
          value={value}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>

          <SliderRadix.Thumb aria-label={'Volume'} className={s.thumb}>
            <div className={s.dot}></div>
          </SliderRadix.Thumb>

          <SliderRadix.Thumb aria-label={'Volume'} className={s.thumb}>
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
